import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from '../top-bar/top-bar';
import { Sidebar } from '../sidebar/sidebar';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, TopBar, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  constructor(public layoutService: LayoutService) { }
}
