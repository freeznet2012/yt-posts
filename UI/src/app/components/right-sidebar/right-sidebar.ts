import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  imports: [CommonModule],
  templateUrl: './right-sidebar.html',
  styleUrl: './right-sidebar.scss',
})
export class RightSidebar {
  suggestedChannels = [
    { id: 1, name: 'Web Dev Simplified', subscribers: '1.4M', avatarUrl: 'https://ui-avatars.com/api/?name=Web+Dev&background=random' },
    { id: 2, name: 'Fireship', subscribers: '2.3M', avatarUrl: 'https://ui-avatars.com/api/?name=Fireship&background=random' },
    { id: 3, name: 'Traversy Media', subscribers: '2.1M', avatarUrl: 'https://ui-avatars.com/api/?name=Traversy&background=random' }
  ];

  trendingTags = ['programming', 'javascript', 'webdev', 'angular', 'react', 'css'];
}
