import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private userService: UserService,
              private router: Router) { }
  canActivate(): boolean {
    console.log('AuthgaurdServiceCalled' + this.userService.isAuthenticated);
    if (!this.userService.isAuthenticated) {
      console.log('not Authenticated');
      this.router.navigate(['signin']);
    }
    return this.userService.isAuthenticated;
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
