import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../@shared/services/alert-service/alert.service';
import { AuthenticationService } from '../../@shared/services/authentication-service/authentication.service';
import { HomeConfiguration } from '../../pages/@home/configuration/home-configuration';
import { DashboardConfiguration } from '../../pages/dashboard/configuration/dashboard-configuration';
import { ProjectsConfiguration } from '../../pages/projects/configuration/projects-configuration';
import { TasksConfiguration } from '../../pages/tasks/configuration/tasks-configuration';
import { UserProfileConfiguration } from '../../pages/user-profile/configuration/user-profile-configuration';
import { CommonComponent } from '../../@shared/components/common/common.component';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: HomeConfiguration.pageRoute, title: HomeConfiguration.pageRouteTitle, icon: HomeConfiguration.pageIcon, class: HomeConfiguration.pageRouteCssClass },
  { path: DashboardConfiguration.pageRoute, title: DashboardConfiguration.pageRouteTitle, icon: DashboardConfiguration.pageIcon, class: DashboardConfiguration.pageRouteCssClass },
  { path: ProjectsConfiguration.pageRoute, title: ProjectsConfiguration.pageRouteTitle, icon: ProjectsConfiguration.pageIcon, class: ProjectsConfiguration.pageRouteCssClass },
  { path: TasksConfiguration.pageRoute, title: TasksConfiguration.pageRouteTitle, icon: TasksConfiguration.pageIcon, class: TasksConfiguration.pageRouteCssClass },
  { path: UserProfileConfiguration.pageRoute, title: UserProfileConfiguration.pageRouteTitle, icon: UserProfileConfiguration.pageIcon, class: UserProfileConfiguration.pageRouteCssClass },







/*   { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' }, */
  { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },/*
  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' } */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends CommonComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router
    ) {
    super(authenticationService, alertService, router);
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
