import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { SearchFilter } from '../../components/search-filter/search-filter';

@Component({
  selector: 'app-saved-posts',
  imports: [CommonModule, PostCard, SearchFilter],
  templateUrl: './saved-posts.html',
  styleUrl: './saved-posts.scss',
})
export class SavedPosts {
  allPosts = [
    {
      id: 2,
      authorName: 'Coding Life',
      authorAvatar: 'https://ui-avatars.com/api/?name=Coding+Life&background=random',
      timestamp: '4 hours ago',
      timeValue: 4,
      content: 'When you finally fix that bug that has been haunting you for days... 🐛💥',
      mediaType: 'video',
      thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
      likes: '856',
      likesValue: 856,
      comments: '124',
      commentsValue: 124
    },
    {
      id: 3,
      authorName: 'Design Matters',
      authorAvatar: 'https://ui-avatars.com/api/?name=Design+Matters&background=random',
      timestamp: '6 hours ago',
      timeValue: 6,
      content: 'Typography is the voice of your design. Choose wisely. #design #typography #uiux',
      mediaType: 'text',
      likes: '2.5k',
      likesValue: 2500,
      comments: '156',
      commentsValue: 156
    }
  ];

  posts = [...this.allPosts];
  channels: string[] = [];
  searchQuery: string = '';
  currentSort: string = 'newest';
  currentContentTypes: string[] = ['all'];
  selectedChannels: string[] = [];

  constructor() {
    // Extract unique channel names from posts
    this.channels = Array.from(new Set(this.allPosts.map(post => post.authorName)));
  }

  onSearchChange(query: string) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  onSortChange(sortValue: string) {
    this.currentSort = sortValue;
    this.applyFilters();
  }

  onContentTypeChange(contentTypes: string[]) {
    this.currentContentTypes = contentTypes;
    this.applyFilters();
  }

  onChannelFilterChange(channels: string[]) {
    this.selectedChannels = channels;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.allPosts];

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter(post =>
        post.content.toLowerCase().includes(this.searchQuery) ||
        post.authorName.toLowerCase().includes(this.searchQuery)
      );
    }

    // Apply content type filter
    if (!this.currentContentTypes.includes('all')) {
      filtered = filtered.filter(post => this.currentContentTypes.includes(post.mediaType));
    }

    // Apply channel filter
    if (this.selectedChannels.length > 0) {
      filtered = filtered.filter(post => this.selectedChannels.includes(post.authorName));
    }

    // Apply sorting
    switch (this.currentSort) {
      case 'newest':
        filtered.sort((a, b) => a.timeValue - b.timeValue);
        break;
      case 'oldest':
        filtered.sort((a, b) => b.timeValue - a.timeValue);
        break;
      case 'popular':
        filtered.sort((a, b) => b.likesValue - a.likesValue);
        break;
      case 'comments':
        filtered.sort((a, b) => b.commentsValue - a.commentsValue);
        break;
    }

    this.posts = filtered;
  }
}
