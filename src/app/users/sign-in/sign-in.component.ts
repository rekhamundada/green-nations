import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserApi } from '../user.api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting =  false;
  sub: Subscription;

  constructor(private router: Router,
              private userApi:  UserApi,
             // private userService: UserService
            ) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if (signInForm.valid) {
      console.log('submitting  ' , signInForm);
      this.submitting = true;
      this.formError = null;
      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
          console.log('got valid data ', data);
          this.router.navigate(['/authenticated']);
        },
        (err) => {
          this.submitting = false;
          console.log('gor error', err);
          this.formError = err;
        });
    }
  }
// ngOnDestroy() {
//   this.sub.unsubscribe();
// }
}
