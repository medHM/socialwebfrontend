import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuteursComponent } from './edit-auteurs.component';

describe('EditAuteursComponent', () => {
  let component: EditAuteursComponent;
  let fixture: ComponentFixture<EditAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
