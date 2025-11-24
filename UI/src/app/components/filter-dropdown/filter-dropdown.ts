import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-filter-dropdown',
  imports: [CommonModule],
  templateUrl: './filter-dropdown.html',
  styleUrl: './filter-dropdown.scss',
})
export class FilterDropdown {
  @Input() label: string = 'Filter';
  @Input() placeholder: string = 'Select...';
  @Input() options: FilterOption[] = [];
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  selectedOption: FilterOption | null = null;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: FilterOption) {
    this.selectedOption = option;
    this.selectionChange.emit(option.value);
    this.isOpen = false;
  }
}
