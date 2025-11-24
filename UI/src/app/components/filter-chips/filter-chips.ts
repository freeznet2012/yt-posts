import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-chips',
  imports: [CommonModule],
  templateUrl: './filter-chips.html',
  styleUrl: './filter-chips.scss',
})
export class FilterChips {
  @Input() chips: { label: string; value: string }[] = [];
  @Output() selectionChange = new EventEmitter<string>();

  activeChip: string = 'all';

  ngOnInit() {
    if (this.chips.length > 0) {
      this.activeChip = this.chips[0].value;
    }
  }

  selectChip(value: string) {
    this.activeChip = value;
    this.selectionChange.emit(value);
  }
}
