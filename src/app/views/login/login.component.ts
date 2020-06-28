import { Component } from '@angular/core';
import { LoginService } from '../../containers/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user = {
    userName: '',
    password: ''
  };
  constructor(private login: LoginService) { }
  submitData() {
    this.login.login(this.user.userName, this.user.password);
  }
}
