import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEditDeleteTaskComponent } from './dialog-create-edit-delete-task.component';

describe('DialogCreateEditDeleteTaskComponent', () => {
  let component: DialogCreateEditDeleteTaskComponent;
  let fixture: ComponentFixture<DialogCreateEditDeleteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateEditDeleteTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateEditDeleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
