import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBpResponsiveComponent } from './header-bp-responsive.component';

describe('HeaderBpResponsiveComponent', () => {
  let component: HeaderBpResponsiveComponent;
  let fixture: ComponentFixture<HeaderBpResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBpResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBpResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
