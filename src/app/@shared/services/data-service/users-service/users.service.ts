import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/@shared/domain-models/user/user';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService<User> {

  constructor(
    public httpClient: HttpClient,
    public afs: AngularFirestore
  ) {
    super(`users`, `user`, httpClient, afs);
  }
}
