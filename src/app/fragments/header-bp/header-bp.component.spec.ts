import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBPComponent } from './header-bp.component';

describe('HeaderBPComponent', () => {
  let component: HeaderBPComponent;
  let fixture: ComponentFixture<HeaderBPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
