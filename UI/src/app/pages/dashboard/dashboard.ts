import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { CreatePost } from '../../components/create-post/create-post';
import { FilterChips } from '../../components/filter-chips/filter-chips';
import { RightSidebar } from '../../components/right-sidebar/right-sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, PostCard, CreatePost, FilterChips, RightSidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  filterChips = [
    { label: 'All', value: 'all' },
    { label: 'Gaming', value: 'gaming' },
    { label: 'Technology', value: 'tech' },
    { label: 'Music', value: 'music' },
    { label: 'Live', value: 'live' },
    { label: 'Programming', value: 'programming' },
    { label: 'Podcasts', value: 'podcasts' },
    { label: 'News', value: 'news' },
  ];

  posts = [
    {
      id: 1,
      authorName: 'Tech Daily',
      authorAvatar: 'https://ui-avatars.com/api/?name=Tech+Daily&background=0D8ABC&color=fff',
      timestamp: '2 hours ago',
      content: 'Just reviewed the new iPhone 15 Pro! The titanium finish feels amazing in hand. What do you think about the new action button?',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
      likes: '1.2k',
      comments: '342'
    },
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

  onSortChange(value: any) {
    console.log('Sort changed:', value);
  }

  onFilterChange(value: any) {
    console.log('Filter changed:', value);
  }
}
