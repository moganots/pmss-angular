import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
// import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { BehaviorSubject, first, map, Observable } from 'rxjs';
import { SharedConfiguration } from '../../configuration/shared-configuration';
import { User } from '../../domain-models/user/user';
import { BaseService } from '../@base/base.service';
import { UsersService } from '../data-service/users-service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  localStorageUser = SharedConfiguration.localStorageUser;
  currentUserData: User;
  currentUserSubject: BehaviorSubject<User>;
  currentUserObservable: Observable<User>;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private usersService: UsersService
    // public router: Router,
    // public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    super(`authentication`, `user`, http);
    this.onInit();
  }

  public get currentUser(): User {
    return this.currentUserSubject.value;
  }

  public get isLoggedIn() {
    return this.currentUser && this.currentUser?.sessionToken?.isSet();
  }

  /**
   * Initializes all service variables.
   * Saving user data in localstorage when logged in and setting up null when logged out
  */
  onInit() {
    this.afAuth.authState.subscribe((user) => {
      this.setCurrentUser(user, true);
    });
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.localStorageUser)));
    this.currentUserObservable = this.currentUserSubject.asObservable();
  }

  login = (emailAddress: any, password: any) => {
    return this.afAuth
      .signInWithEmailAndPassword(emailAddress, password)
      .then((authResult) => {
        if (!(authResult && authResult.user)) { throw { message: `Authentication failed for ${emailAddress}.` }; }
        return { user: this.setCurrentUser(authResult.user, true), navigateTo: `home`, message: `${emailAddress} successfully logged in.` };
      });
    /*
    .then((user) => {
      this.usersService.getSingleOrDefaultBy({ emailAddress: user?.email }).pipe(map((user) => {
        if(user){
          return { user: user, message: `${emailAddress} successfully logged in.` };
        }
        throw { message: `Authentication failed for ${emailAddress}.` }
      }));
    })*/



    /*
    .then((result) => {
      if (result && result.user) {
        return this.usersService.getSingleOrDefaultBy({ emailAddress: result.user.email }).pipe(map((user) => {
          if (user) {
            console.log(user);
            return { user: userRef, message: `${emailAddress} successfully logged in.` };
          }
          throw { user: null, message: `Authentication failed for ${emailAddress}.` };
        }));
        const userRef = this.setUserData(result.user);
        console.log(userRef);
        this.currentUserSubject.next(userRef);
        localStorage.setItem(this.localStorageUser, JSON.stringify(userRef));
        return { user: userRef, message: `${emailAddress} successfully logged in.` };
      }
      throw { message: `Authentication failed for ${emailAddress}.` };
    });
    */
  }

  register(user: User) {
    return this.http.post(this.getEndpointUrl(`register`), user);
  }

  setCurrentUser(user: firebase.User, isLogin = false) {
    this.currentUserData = null;
    this.usersService.getSingleOrDefaultBy({ emailAddress: user?.email }).subscribe((user) => {
      if (isLogin && user) {
        this.currentUserData = user;
        user.sessionToken = this.generateSessionToken();
        localStorage.setItem(this.localStorageUser, JSON.stringify(this.currentUserData));
        JSON.parse(localStorage.getItem(this.localStorageUser)!);
      } else {
        localStorage.setItem(this.localStorageUser, null);
        JSON.parse(localStorage.getItem(this.localStorageUser)!);
      }
    });
    return this.currentUserData;
  }

  setUserData = (user: firebase.User, isLogin = false): any => {
    return this.usersService.getSingleOrDefaultById(1).pipe(map((user) => {
      if (user) {
        user.sessionToken = this.generateSessionToken();
      }
      return user;
    }));
    /* const userData: User = {
      uid: user.uid,
      emailAddress: user.email,
      displayName: user.displayName,
      //avatar: user.photoURL,
      isEmailVerified: user.emailVerified,
      sessionToken: isLogin ? this.generateSessionToken() : null
    };
    return null;// userRef.set(userData, { merge: true }).then((value) => { return value; }); */
  }

  generateSessionToken = (length = 256) => {
    const result = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join(``);
  }

  logout() {
    localStorage.removeItem(this.localStorageUser);
    this.currentUserSubject.next(null);
  }
}
