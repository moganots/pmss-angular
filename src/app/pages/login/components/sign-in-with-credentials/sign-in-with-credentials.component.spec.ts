import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithCredentialsComponent } from './sign-in-with-credentials.component';

describe('SignInWithCredentialsComponent', () => {
  let component: SignInWithCredentialsComponent;
  let fixture: ComponentFixture<SignInWithCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInWithCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInWithCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
