import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Task } from 'src/app/@shared/domain-models/task/task';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';
import { DialogCreateEditDeleteTaskComponent } from './components/dialogs/dialog-create-edit-delete-task/dialog-create-edit-delete-task.component';
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

  constructor(private tasksService: TasksService, private alertService: AlertService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  getStatusCssColor(task: Task) {
    return task?.status?.value?.toLocaleLowerCase()?.replace(` `, ``);
  }
  onButtonClickEdit = (task: Task) => {
    const height = '36vh';
    const width = '18vw';
    const top = '30px'; //7.2vh';
    const left = '25vw';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = task || {};
    dialogConfig.enterAnimationDuration = '3000ms';
    dialogConfig.exitAnimationDuration = '1500ms';
    // dialogConfig.height = height;
    // dialogConfig.maxHeight = '95%';
    // dialogConfig.width = width;
    // dialogConfig.panelClass = 'dialog-container';
    dialogConfig.position = {
      /* left,
      top, */
    };
    const matDialogSub = this.matDialog
      .open(DialogCreateEditDeleteTaskComponent, dialogConfig)
      .afterClosed()
      .subscribe({
        next: (result) => { },
        complete: () => { },
        error: (error) => {
          this.alertService.error(error.message || error);
        },
      });
  }
  onButtonClickDelete = (task: Task) => {
    this.tasksService.delete(task?.id).then((result) => {
      this.alertService.success(`${task?.name} Task, deleted successfully`);
    }, (error) => { this.alertService.error(`Unable to delete the ${task?.name} Task`); });
  }
}
