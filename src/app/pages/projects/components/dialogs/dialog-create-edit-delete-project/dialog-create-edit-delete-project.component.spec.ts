import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEditDeleteProjectComponent } from './dialog-create-edit-delete-project.component';

describe('DialogCreateEditDeleteProjectComponent', () => {
  let component: DialogCreateEditDeleteProjectComponent;
  let fixture: ComponentFixture<DialogCreateEditDeleteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateEditDeleteProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateEditDeleteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
