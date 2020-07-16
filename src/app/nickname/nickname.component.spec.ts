import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameComponent } from './nickname.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NicknameComponent', () => {
  let component: NicknameComponent;
  let fixture: ComponentFixture<NicknameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NicknameComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
