import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../../../@shared/services/data-service/data.service';
import { Project } from '../../../@shared/domain-models/project/project';
import { LookupValueService } from '../../../@shared/services/data-service/lookup-value-service/lookup-value.service';
import { LookupValue } from '../../../@shared/domain-models/@base/lookup-value';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends DataService<Project> {
  projectTypes: LookupValue[] = [];
  priorities: LookupValue[] = [];
  statuses: LookupValue[] = [];

  constructor(
    public httpClient: HttpClient,
    public afs: AngularFirestore,
    private lookupValueService: LookupValueService
  ) {
    super(`projects`, `project`, httpClient, afs);
    lookupValueService.getAll().subscribe((values) => {
      values.filter((value) => value?.lookupCategory?.name === `IndustryType`)?.forEach((value) => this.projectTypes.push(value));
      values.filter((value) => value?.lookupCategory?.name === `Status`)?.forEach((value) => this.priorities.push(value));
      values.filter((value) => value?.lookupCategory?.name === `Status`)?.forEach((value) => this.statuses.push(value));
    });
  }

  mapValues(value: Project): Project {
    value.status = this.statuses.find((status) => status?.id === value?.statusId);
    return value;
  }
}
