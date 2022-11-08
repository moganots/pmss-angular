import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/@shared/domain-models/task/task';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';
import { TasksConfiguration } from './configuration/tasks-configuration';
import { TasksService } from './service/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() pageName = TasksConfiguration.pageName;
  @Input() pageTitle = TasksConfiguration.pageTitle;
  @Input() tableHeading = TasksConfiguration.tableHeading;
  tasks: Task[] = [];

  constructor(private tasksService: TasksService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  getStatusCssColor(task: Task) {
    return task?.status?.value?.toLocaleLowerCase()?.replace(` `, ``);
  }
  onButtonClickEdit = (task: Task) => {
    this.tasksService.delete(task).then((result) => {
      this.alertService.success(`${task?.name} Task, deleted successfully`);
    }, (error) => {this.alertService.error(`Unable to delete the ${task?.name} Task`);});
  }
  onButtonClickDelete = (task: Task) => {
    this.tasksService.delete(task?.id).then((result) => {
      this.alertService.success(`${task?.name} Task, deleted successfully`);
    }, (error) => {this.alertService.error(`Unable to delete the ${task?.name} Task`);});
  }
}
