import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsResponsiveComponent } from './profile-settings-responsive.component';

describe('ProfileSettingsResponsiveComponent', () => {
  let component: ProfileSettingsResponsiveComponent;
  let fixture: ComponentFixture<ProfileSettingsResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
