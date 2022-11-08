import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderLoginRegisterComponent } from './header/login-register/header-login-register/header-login-register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

export { NavbarComponent } from './navbar/navbar.component';
export { HeaderLoginRegisterComponent } from './header/login-register/header-login-register/header-login-register.component';
export { SidebarComponent } from './sidebar/sidebar.component';
export { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    NavbarComponent,
    HeaderLoginRegisterComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    HeaderLoginRegisterComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
