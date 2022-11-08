import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/@shared/components/common/common.component';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';
import { AuthenticationService } from 'src/app/@shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-sign-in-with',
  templateUrl: './sign-in-with.component.html',
  styleUrls: ['./sign-in-with.component.scss']
})
export class SignInWithComponent extends CommonComponent implements OnInit {

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
