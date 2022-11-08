import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommonComponent } from '../../@shared/components/common/common.component';
import { AlertService } from '../../@shared/services/alert-service/alert.service';
import { AuthenticationService } from '../../@shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends CommonComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router,
    location: Location,
    private element: ElementRef) {
    super(authenticationService, alertService, router);
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

}
