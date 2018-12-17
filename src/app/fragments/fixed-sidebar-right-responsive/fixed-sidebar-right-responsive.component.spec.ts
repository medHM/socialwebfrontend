import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidebarRightResponsiveComponent } from './fixed-sidebar-right-responsive.component';

describe('FixedSidebarRightResponsiveComponent', () => {
  let component: FixedSidebarRightResponsiveComponent;
  let fixture: ComponentFixture<FixedSidebarRightResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidebarRightResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidebarRightResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
