import { Routes } from '@angular/router';

import { HomeComponent } from '../../pages/@home/home.component';
import { HomeConfiguration } from '../../pages/@home/configuration/home-configuration';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DashboardConfiguration } from '../../pages/dashboard/configuration/dashboard-configuration';

import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ProjectsConfiguration } from '../../pages/projects/configuration/projects-configuration';

import { TasksComponent } from '../../pages/tasks/tasks.component';
import { TasksConfiguration } from '../../pages/tasks/configuration/tasks-configuration';

import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { UserProfileConfiguration } from '../../pages/user-profile/configuration/user-profile-configuration';
import { TablesComponent } from 'src/app/pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: HomeConfiguration.pageRoute, title: HomeConfiguration.pageRouteTitle, component: HomeComponent },
    { path: DashboardConfiguration.pageRoute, title: DashboardConfiguration.pageRouteTitle, component: DashboardComponent },
    { path: ProjectsConfiguration.pageRoute, title: ProjectsConfiguration.pageRouteTitle, component: ProjectsComponent },
    { path: TasksConfiguration.pageRoute, title: TasksConfiguration.pageRouteTitle, component: TasksComponent },
    { path: UserProfileConfiguration.pageRoute, title: UserProfileConfiguration.pageRouteTitle, component: UserProfileComponent },


    /* { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent }, */
    { path: 'tables',         component: TablesComponent },/*
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent } */
];
