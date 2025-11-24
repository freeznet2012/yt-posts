import { Component, EventEmitter, Output, Input, HostListener, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.scss',
})
export class SearchFilter {
  @Input() channels: string[] = [];

  searchText: string = '';
  selectedSort: string = 'newest';
  selectedContentTypes: Set<string> = new Set(['all']);
  selectedChannels: Set<string> = new Set();
  showSortDropdown: boolean = false;
  showChannelDropdown: boolean = false;

  sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Most Popular', value: 'popular' },
    { label: 'Most Comments', value: 'comments' }
  ];

  contentTypeButtons = [
    { label: 'All', value: 'all', icon: 'all' },
    { label: 'Videos', value: 'video', icon: 'video' },
    { label: 'Images', value: 'image', icon: 'image' },
    { label: 'Links', value: 'link', icon: 'link' },
    { label: 'Text Only', value: 'text', icon: 'text' },
    { label: 'Polls', value: 'poll', icon: 'poll' }
  ];

  @Output() searchChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() contentTypeChange = new EventEmitter<string[]>();
  @Output() channelFilterChange = new EventEmitter<string[]>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if the click was outside the component
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showSortDropdown = false;
      this.showChannelDropdown = false;
    }
  }

  onSearchInput() {
    this.searchChange.emit(this.searchText);
  }

  onSortSelect(value: string) {
    this.selectedSort = value;
    this.showSortDropdown = false;
    this.sortChange.emit(value);
  }

  onContentTypeClick(value: string) {
    if (value === 'all') {
      this.selectedContentTypes.clear();
      this.selectedContentTypes.add('all');
    } else {
      this.selectedContentTypes.delete('all');
      if (this.selectedContentTypes.has(value)) {
        this.selectedContentTypes.delete(value);
      } else {
        this.selectedContentTypes.add(value);
      }
      if (this.selectedContentTypes.size === 0) {
        this.selectedContentTypes.add('all');
      }
    }
    this.contentTypeChange.emit(Array.from(this.selectedContentTypes));
  }

  onChannelToggle(channelName: string) {
    if (this.selectedChannels.has(channelName)) {
      this.selectedChannels.delete(channelName);
    } else {
      this.selectedChannels.add(channelName);
    }
    this.channelFilterChange.emit(Array.from(this.selectedChannels));
  }

  isContentTypeActive(value: string): boolean {
    return this.selectedContentTypes.has(value);
  }

  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
    this.showChannelDropdown = false;
  }

  toggleChannelDropdown() {
    this.showChannelDropdown = !this.showChannelDropdown;
    this.showSortDropdown = false;
  }
}
