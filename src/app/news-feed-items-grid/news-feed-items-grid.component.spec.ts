import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedItemsGridComponent } from './news-feed-items-grid.component';

describe('NewsFeedItemsGridComponent', () => {
  let component: NewsFeedItemsGridComponent;
  let fixture: ComponentFixture<NewsFeedItemsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedItemsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
