import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
  signIn: (userName: string, password: string, rememberMe: boolean) => Observable<any>;

  signOut: () => Observable<any>;
}
