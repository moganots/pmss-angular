import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/@shared/components/common/common.component';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';
import { AuthenticationService } from 'src/app/@shared/services/authentication-service/authentication.service';
import { LoginConfiguration } from 'src/app/pages/login/configuration/login-configuration';
import { RegisterConfiguration } from 'src/app/pages/register/configuration/register-configuration';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent extends CommonComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  private routerLinkAuthenticationLogin = LoginConfiguration.pageRoute;
  private routerLinkAuthenticationRegister = RegisterConfiguration.pageRoute;

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router
    ) {
    super(authenticationService, alertService, router);
  }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }
}
