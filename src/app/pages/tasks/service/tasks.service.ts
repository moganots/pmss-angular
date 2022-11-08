import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LookupValue } from 'src/app/@shared/domain-models/@base/lookup-value';
import { Project } from 'src/app/@shared/domain-models/project/project';
import { Task } from 'src/app/@shared/domain-models/task/task';
import { User } from 'src/app/@shared/domain-models/user/user';
import { DataService } from 'src/app/@shared/services/data-service/data.service';
import { LookupValueService } from 'src/app/@shared/services/data-service/lookup-value-service/lookup-value.service';
import { UsersService } from 'src/app/@shared/services/data-service/users-service/users.service';
import { ProjectsService } from '../../projects/service/projects.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends DataService<Task> {
  projects: Project[] = [];
  statuses: LookupValue[] = [];
  users: User[] = [];

  constructor(
    public httpClient: HttpClient,
    public afs: AngularFirestore,
    private lookupValueService: LookupValueService,
    private projectsService: ProjectsService,
    private usersService: UsersService
  ) {
    super(`tasks`, `task`, httpClient, afs);
    lookupValueService.getAll().subscribe((values) => {
      values.filter((value) => value?.lookupCategory?.name === `Status`)?.forEach((value) => this.statuses.push(value));
    });
    projectsService.getAll().subscribe((values) => {
      values?.forEach((value) => this.projects.push(value));
    });
    usersService.getAll().subscribe((values) => {
      values?.forEach((value) => this.users.push(value));
    });
  }

  mapValues(value: Task): Task {
    value.project = this.projects.find((project) => project?.id === value?.projectId);
    value.status = this.statuses.find((status) => status?.id === value?.statusId);
    value.assignee = this.users.find((user) => user?.id === value?.assigneeId);
    return value;
  }
}
