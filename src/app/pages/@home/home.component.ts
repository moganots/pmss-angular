import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [{
    icon: `empty_dashboard`,
    title: `Dashboard`,
    description: `View performance and statistics`,
    command: `dashboard`
  }, {
    icon: `hub`,
    title: `Projects`,
    description: `Manage (view, create, update and delete) projects`,
    command: `projects`
  }, {
    icon: `task_alt`,
    title: `Tasks`,
    description: `Manage (view, create, update and delete) tasks`,
    command: `tasks`
  }, {
    icon: `account_circle`,
    title: `User Profile`,
    description: `Manage user profile`,
    command: `user-profile`
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardNavigateTo(command) {
    this.router.navigate([command]);
  }

}
