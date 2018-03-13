import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { UserApi } from '../../app/users/user.api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private userApi: UserApi,
    private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }
  signOut() {
    this.userApi.signOut();
  }
}
