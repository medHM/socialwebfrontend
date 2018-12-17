import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPopupChatComponent } from './window-popup-chat.component';

describe('WindowPopupChatComponent', () => {
  let component: WindowPopupChatComponent;
  let fixture: ComponentFixture<WindowPopupChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowPopupChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowPopupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
