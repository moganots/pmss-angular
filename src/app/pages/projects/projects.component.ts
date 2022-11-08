import { Component, Input, OnInit } from '@angular/core';
import { ProjectsConfiguration } from './configuration/projects-configuration';
import { Project } from '../../@shared/domain-models/project/project';
import { ProjectsService } from './service/projects.service';
import { AlertService } from 'src/app/@shared/services/alert-service/alert.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() pageName = ProjectsConfiguration.pageName;
  @Input() pageTitle = ProjectsConfiguration.pageTitle;
  @Input() tableHeading = ProjectsConfiguration.tableHeading;
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.projectsService.getAll().subscribe((projects) => {
      this.projects = projects;
    });
  }
  budgetFormatter = (project: Project) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
    }).format(project?.annualBudget || project?.annualTarget);
  }
  getProjectStatusCssColor(project: Project) {
    return project?.status?.value?.toLocaleLowerCase()?.replace(` `, ``);
  }
  onButtonClickEdit = (project: Project) => {
    this.projectsService.delete(project).then((result) => {
      this.alertService.success(`${project?.name} Project, deleted successfully`);
    }, (error) => {this.alertService.error(`Unable to delete the ${project?.name} Project`);});
  }
  onButtonClickDelete = (project: Project) => {
    this.projectsService.delete(project?.id).then((result) => {
      this.alertService.success(`${project?.name} deleted successfully`);
    }, (error) => {this.alertService.error(`Unable to delete the ${project?.name} Project`);});
  }

}
