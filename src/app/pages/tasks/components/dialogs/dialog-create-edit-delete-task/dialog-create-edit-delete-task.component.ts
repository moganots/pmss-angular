import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/@shared/domain-models/task/task';
import { TasksService } from '../../../service/tasks.service';

@Component({
  selector: 'app-dialog-create-edit-delete-task',
  templateUrl: './dialog-create-edit-delete-task.component.html',
  styleUrls: ['./dialog-create-edit-delete-task.component.scss']
})
export class DialogCreateEditDeleteTaskComponent implements OnInit {
  taskId?: number;
  task: Task;
  @Input() pageName: string;
  @Input() pageIcon: string;
  @Input() pageTitle: string;
  @Input() pageSubTitle: string;
  @Input() pageHeading: string;
  frmCreateEdit: FormGroup;
  btnTitle = `Create Task`;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.title.subscribe((title) => {
      this.pageHeading = title;
      this.btnTitle = title;
    });
    this.route.params.subscribe((params) => {
      this.taskId = params?.id;
    });
    this.tasksService.getAll().subscribe((tasks) => {
      this.task = tasks?.find((task) => task.id == this.taskId);
    });

    this.frmCreateEdit = this.formBuilder.group({
      id: [{value: this.task?.id, disabled: true}, this.isFieldRequired(`id`)],
      name: ['', this.isFieldRequired(`name`)],
      description: ['', this.isFieldRequired(`description`)],
      taskTypeId: ['', this.isFieldRequired(`taskTypeId`)],
      projectId: ['', this.isFieldRequired(`projectId`)],
      parentTaskId: ['', this.isFieldRequired(`parentTaskId`)],
      priorityId: ['', this.isFieldRequired(`priorityId`)],
      statusId: ['', this.isFieldRequired(`statusId`)],
      assigneeId: ['', this.isFieldRequired(`assigneeId`)],
      createdBy: ['', this.isFieldRequired(`createdBy`)],
      dateCreated: ['', this.isFieldRequired(`dateCreated`)]

      /*
        assigneeId
        createdBy
        dateCreated
        description
        id
        name
        parentTaskId
        priorityId
        projectId
        statusId
        taskTypeId
      */
    });
  }

  isFieldRequired = (fieldName: string) => {
    return [`name`, `description`, `taskTypeId`, `projectId`, `priorityId`, `statusId`].includes(fieldName) ? Validators.required : null;
  }

  // convenience getter for easy access to form fields
  get f() { return this.frmCreateEdit.controls; }

  onSubmit = () => {

  }
}
