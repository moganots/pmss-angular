import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

import { LoginComponent } from '../../pages/login/login.component';
import { SignInWithComponent } from '../../pages/login/components/sign-in-with/sign-in-with.component';
import { SignInWithCredentialsComponent } from '../../pages/login/components/sign-in-with-credentials/sign-in-with-credentials.component';

import { RegisterComponent } from '../../pages/register/register.component';
import { SignUpWithCredentialsComponent } from '../../pages/register/components/sign-up-with-credentials/sign-up-with-credentials.component';
import { SignUpWithComponent } from '../../pages/register/components/sign-up-with/sign-up-with.component';

export { LoginComponent } from '../../pages/login/login.component';
export { SignInWithComponent } from '../../pages/login/components/sign-in-with/sign-in-with.component';
export { SignInWithCredentialsComponent } from '../../pages/login/components/sign-in-with-credentials/sign-in-with-credentials.component';

export { RegisterComponent } from '../../pages/register/register.component';
export { SignUpWithCredentialsComponent } from '../../pages/register/components/sign-up-with-credentials/sign-up-with-credentials.component';
export { SignUpWithComponent } from '../../pages/register/components/sign-up-with/sign-up-with.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    // NgbModule,
    ComponentsModule
  ],
  declarations: [
    LoginComponent,
    SignInWithComponent,
    SignInWithCredentialsComponent,
    RegisterComponent,
    SignUpWithComponent,
    SignUpWithCredentialsComponent
  ],
  exports: [
    LoginComponent,
    SignInWithComponent,
    SignInWithCredentialsComponent,
    RegisterComponent,
    SignUpWithComponent,
    SignUpWithCredentialsComponent
  ]
})
export class AuthLayoutModule { }
