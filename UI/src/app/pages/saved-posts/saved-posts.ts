import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { FilterDropdown } from '../../components/filter-dropdown/filter-dropdown';

@Component({
  selector: 'app-saved-posts',
  imports: [CommonModule, PostCard, FilterDropdown],
  templateUrl: './saved-posts.html',
  styleUrl: './saved-posts.scss',
})
export class SavedPosts {
  filterOptions = [
    { label: 'All Saved', value: 'all' },
    { label: 'Videos', value: 'video' },
    { label: 'Images', value: 'image' },
  ];

  posts = [
    {
      id: 2,
      authorName: 'Coding Life',
      authorAvatar: 'https://ui-avatars.com/api/?name=Coding+Life&background=random',
      timestamp: '4 hours ago',
      content: 'When you finally fix that bug that has been haunting you for days... 🐛💥',
      mediaType: 'video',
      thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
      likes: '856',
      comments: '124'
    },
    {
      id: 3,
      authorName: 'Design Matters',
      authorAvatar: 'https://ui-avatars.com/api/?name=Design+Matters&background=random',
      timestamp: '6 hours ago',
      content: 'Typography is the voice of your design. Choose wisely. #design #typography #uiux',
      mediaType: 'text',
      likes: '2.5k',
      comments: '156'
    }
  ];

  onFilterChange(value: any) {
    console.log('Filter changed:', value);
  }
}
