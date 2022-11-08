import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedConfiguration } from '../../configuration/shared-configuration';
import { User } from '../../domain-models/user/user';
import { AlertService } from '../../services/alert-service/alert.service';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit, OnDestroy {
  @Input() isProduction = SharedConfiguration.isProduction;
  @Input() todaysDate: number = Date.now();
  @Input() companyName = SharedConfiguration.companyName;
  @Input() companyWebsite = SharedConfiguration.companyWebsite;
  @Input() developedBy = SharedConfiguration.developedBy;
  @Input() developedByWebsite = SharedConfiguration.developedByWebsite;
  @Input() applicationSrcIcon: string = SharedConfiguration.applicationSrcIcon;
  @Input() applicationName: string = SharedConfiguration.applicationName;
  @Input() applicationShortName: string = SharedConfiguration.applicationShortName;
  @Input() applicationFullName: string = SharedConfiguration.applicationFullName;
  @Input() applicationUseSignInWith: boolean = SharedConfiguration.applicationUseSignInWith;
  @Input() applicationUseSignUpWith: boolean = SharedConfiguration.applicationUseSignUpWith;
  @Input() currentUser: User;

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router
    ) {
    this.currentUser = authenticationService.currentUser;
  }

  ngOnInit(): void { }

  isLoggedIn(){
    return this.authenticationService.isLoggedIn;
  }

  toggleLogout() {
    this.authenticationService.logout();
    this.router.navigate([`/`]);
  }
  ngOnDestroy(): void { }

}
