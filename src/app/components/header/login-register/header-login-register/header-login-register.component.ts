import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';
import { AuthenticationService } from 'src/app/@shared/services/authentication-service/authentication.service';
import { CommonComponent } from '../../../../@shared/components/common/common.component';

@Component({
  selector: 'app-header-login-register',
  templateUrl: './header-login-register.component.html',
  styleUrls: ['./header-login-register.component.scss']
})
export class HeaderLoginRegisterComponent extends CommonComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router
    ) {
    super(authenticationService, alertService, router);
  }

  ngOnInit(): void {
  }

}
