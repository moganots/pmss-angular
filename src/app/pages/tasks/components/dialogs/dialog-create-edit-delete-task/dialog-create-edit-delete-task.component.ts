import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-edit-delete-task',
  templateUrl: './dialog-create-edit-delete-task.component.html',
  styleUrls: ['./dialog-create-edit-delete-task.component.scss']
})
export class DialogCreateEditDeleteTaskComponent implements OnInit {
  @Input() pageName: string;
  @Input() pageIcon: string;
  @Input() pageTitle: string;
  @Input() pageSubTitle: string;
  @Input() pageHeading: string;

  constructor(public dialogRef: MatDialogRef<DialogCreateEditDeleteTaskComponent>,
  ) { }

  ngOnInit() {
    this.dialogRef.updatePosition({
      top: `7vh`,
      left: `40px`
    });
  }

  onButtonClickCloseDialog = () => {

  }

}
