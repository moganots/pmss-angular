import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { LookupCategory } from '../../../../@shared/domain-models/@base/lookup-category';

@Injectable({
  providedIn: 'root'
})
export class LookupCategoryService extends DataService<LookupCategory> {

  constructor(
    public httpClient: HttpClient,
    public afs: AngularFirestore
  ) {
    super(`lookup-category`, `lookup-category`, httpClient, afs);
  }
}
