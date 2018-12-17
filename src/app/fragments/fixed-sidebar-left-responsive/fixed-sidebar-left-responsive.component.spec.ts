import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidebarLeftResponsiveComponent } from './fixed-sidebar-left-responsive.component';

describe('FixedSidebarLeftResponsiveComponent', () => {
  let component: FixedSidebarLeftResponsiveComponent;
  let fixture: ComponentFixture<FixedSidebarLeftResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidebarLeftResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidebarLeftResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
