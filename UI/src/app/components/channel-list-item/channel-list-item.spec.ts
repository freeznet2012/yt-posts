import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelListItem } from './channel-list-item';

describe('ChannelListItem', () => {
  let component: ChannelListItem;
  let fixture: ComponentFixture<ChannelListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
