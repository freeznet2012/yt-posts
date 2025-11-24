import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channel-list-item',
  imports: [CommonModule],
  templateUrl: './channel-list-item.html',
  styleUrl: './channel-list-item.scss',
})
export class ChannelListItem {
  @Input() channel: any;
}
