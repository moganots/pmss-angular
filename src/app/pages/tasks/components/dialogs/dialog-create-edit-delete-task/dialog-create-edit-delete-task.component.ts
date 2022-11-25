import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataColumn } from 'src/app/@shared/domain-models/data-column';
import { Task } from 'src/app/@shared/domain-models/task/task';
import { TasksConfiguration } from '../../../configuration/tasks-configuration';
import { TasksService } from '../../../service/tasks.service';

@Component({
  selector: 'app-dialog-create-edit-delete-task',
  templateUrl: './dialog-create-edit-delete-task.component.html',
  styleUrls: ['./dialog-create-edit-delete-task.component.scss']
})
export class DialogCreateEditDeleteTaskComponent implements OnInit {
  taskId?: number;
  task: Task = {};
  @Input() pageName: string;
  @Input() pageIcon: string;
  @Input() pageTitle: string;
  @Input() pageSubTitle: string;
  @Input() pageHeading: string;

  updates: { [key: string]: any } = {};
  useColumns: DataColumn[] = [];
  formGroup: FormGroup;
  formGroupFields: FormGroup;

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
      this.task = {...tasks?.find((task) => task.id == this.taskId)};
    });
    this.useColumns = TasksConfiguration.dataColumns?.filter(
      (column) => column?.canView /*&& !this.isFieldDisabled(column)*/
    );
    this.formGroupFields = new FormGroup({});
    this.useColumns?.forEach((column) => {
      const control = new FormControl(
        [{
          value: '', // column.value,
          disabled: this.isFieldDisabled(column?.name)
        }],
        this.isFieldRequired(column?.name)
      );
      // this.setControlFilterValues(column, control);
      this.formGroupFields.addControl(column.name, control);
    });
    this.formGroup = this.formBuilder.group({
      formFields: this.formGroupFields,
    });






    /*
    this.frmCreateEdit = this.formBuilder.group({
      id: [{ value: this.task?.id, disabled: this.isFieldDisabled(`id`) }, this.isFieldRequired(`id`)],
      name: [{ value: this.task?.name, disabled: this.isFieldDisabled(`name`) }, this.isFieldRequired(`name`)],
      description: [{ value: this.task?.description, disabled: this.isFieldDisabled(`description`) }, this.isFieldRequired(`description`)],
      taskTypeId: [{ value: this.task?.taskTypeId, disabled: this.isFieldDisabled(`taskTypeId`) }, this.isFieldRequired(`taskTypeId`)],
      projectId: [{ value: this.task?.projectId, disabled: this.isFieldDisabled(`projectId`) }, this.isFieldRequired(`projectId`)],
      parentTaskId: [{ value: this.task?.parentTaskId, disabled: this.isFieldDisabled(`parentTaskId`) }, this.isFieldRequired(`parentTaskId`)],
      priorityId: [{ value: this.task?.priorityId, disabled: this.isFieldDisabled(`priorityId`) }, this.isFieldRequired(`priorityId`)],
      statusId: [{ value: this.task?.statusId, disabled: this.isFieldDisabled(`statusId`) }, this.isFieldRequired(`statusId`)],
      assigneeId: [{ value: this.task?.assigneeId, disabled: this.isFieldDisabled(`assigneeId`) }, this.isFieldRequired(`assigneeId`)],
      createdBy: [{ value: this.task?.createdBy, disabled: this.isFieldDisabled(`createdBy`) }, this.isFieldRequired(`createdBy`)],
      dateCreated: [{ value: this.task?.dateCreated, disabled: this.isFieldDisabled(`dateCreated`) }, this.isFieldRequired(`dateCreated`)],

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
    })
      */
  }

  isFieldDisabled = (fieldName: string) => {
    return [`id`, `description`, `createdBy`, `dateCreated`, `modifiedBy`, `dateModified`].includes(fieldName) ? Validators.required : null;
  }
  isFieldRequired = (fieldName: string) => {
    return [`name`, `description`, `taskTypeId`, `projectId`, `priorityId`, `statusId`].includes(fieldName) ? Validators.required : null;
  }
  isFieldHidden = (column: DataColumn) => {
    return [`IsActive`, `isActive`, `CreatedBy`, `createdBy`, `DateCreated`, `dateCreated`, `ModifiedBy`, `modifiedBy`, `DateModified`, `dateModified`].includes(column?.name);
  }
  onValueChanged = (e) => {
    return;
  }

  // convenience getter for easy access to form fields
  get f() { return this.frmCreateEdit.controls; }

  getFieldErrorMessage(name: string) {
    const fName = this.capitalizeFirstLetter(this.splitCamelCase(name));
    if (this.f[name].hasError('required')) {
      return `Please provide a value for ${fName}`;
    }
    return this.f[name].hasError(name) ? `Invalid ${fName}, provided` : ``;
  }

  onSubmit = () => {

  }

  capitalizeFirstLetter = (value: string) => {
    return [(value || ``).charAt(0).toLocaleUpperCase(), (value || ``).slice(1)].join('');
  }
  splitCamelCase = (value: string) => {
    return (value || ``).trim().replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  
}
