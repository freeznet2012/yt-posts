import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelListItem } from '../../components/channel-list-item/channel-list-item';

@Component({
  selector: 'app-channels',
  imports: [CommonModule, ChannelListItem],
  templateUrl: './channels.html',
  styleUrl: './channels.scss',
})
export class Channels {
  channels = [
    {
      id: 1,
      name: 'Tech Daily',
      avatarUrl: 'https://ui-avatars.com/api/?name=Tech+Daily&background=0D8ABC&color=fff',
      subscribers: '1.2M'
    },
    {
      id: 2,
      name: 'Coding Life',
      avatarUrl: 'https://ui-avatars.com/api/?name=Coding+Life&background=random',
      subscribers: '850K'
    },
    {
      id: 3,
      name: 'Design Matters',
      avatarUrl: 'https://ui-avatars.com/api/?name=Design+Matters&background=random',
      subscribers: '420K'
    },
    {
      id: 4,
      name: 'Web Dev Simplified',
      avatarUrl: 'https://ui-avatars.com/api/?name=Web+Dev&background=random',
      subscribers: '1.5M'
    },
    {
      id: 5,
      name: 'Fireship',
      avatarUrl: 'https://ui-avatars.com/api/?name=Fireship&background=random',
      subscribers: '2.1M'
    },
    {
      id: 6,
      name: 'The Net Ninja',
      avatarUrl: 'https://ui-avatars.com/api/?name=Net+Ninja&background=random',
      subscribers: '1.1M'
    }
  ];
}
