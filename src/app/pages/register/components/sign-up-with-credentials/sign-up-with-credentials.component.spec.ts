import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWithCredentialsComponent } from './sign-up-with-credentials.component';

describe('SignUpWithCredentialsComponent', () => {
  let component: SignUpWithCredentialsComponent;
  let fixture: ComponentFixture<SignUpWithCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpWithCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpWithCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
