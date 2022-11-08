import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { LookupCategory } from '../../../../@shared/domain-models/@base/lookup-category';
import { LookupValue } from '../../../../@shared/domain-models/@base/lookup-value';
import { LookupCategoryService } from '../lookup-category-service/lookup-category.service';

@Injectable({
  providedIn: 'root'
})
export class LookupValueService extends DataService<LookupValue> {
  categories: LookupCategory[] = [];

  constructor(
    public httpClient: HttpClient,
    public afs: AngularFirestore,
    private lookupCategoryService: LookupCategoryService
  ) {
    super(`lookup-value`, `lookup-value`, httpClient, afs);
    this.lookupCategoryService.getAll().subscribe((categories) => {
      categories.forEach((category) => this.categories.push(category));
    });
  }

  mapValues(value: LookupValue): LookupValue {
    value.lookupCategory = this.categories.find((category) => category?.id === value?.lookupCategoryId);
    return value;
  }
}
