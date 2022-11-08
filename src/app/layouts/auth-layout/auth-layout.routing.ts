import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { LoginConfiguration } from 'src/app/pages/login/configuration/login-configuration';

import { RegisterComponent } from '../../pages/register/register.component';
import { RegisterConfiguration } from 'src/app/pages/register/configuration/register-configuration';

export const AuthLayoutRoutes: Routes = [
    { path: LoginConfiguration.pageRoute, component: LoginComponent },
    { path: RegisterConfiguration.pageRoute, component: RegisterComponent }
];
