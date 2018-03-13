import { Injectable } from '@angular/core';
import { UserApi } from '../users/user.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';


@Injectable()
export class UserService  implements UserApi {
  isAuthenticated = true;
  constructor(private router: Router) { }

  signIn(userName: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('userService Signin: ' + userName + password + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({});
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return Observable.of({});
}
}
