import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = '';
  datas: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
    private dataService: DataService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('userdetails'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.URL = environment.host + environment.domain + environment.port + environment.baseUrl;
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username?: string, password?: string) {
    // const user = {
    //   jwttoken: 'faslkdfjlaskdjflasdfasdfjlkj'
    // };

    return this.http
      .post(this.URL + environment.login, {
        passWord: password,
        userName: username
      })
      .subscribe(
        user => {
          this.datas = user;
          if (this.datas.length > 0) {
            localStorage.setItem('userdetails', JSON.stringify(user[0]));
            this.currentUserSubject.next(this.datas[0]);
            this.router.navigate(['/admin/dashboard']);
            this.dataService.usersSubject.next(user[0]);
          } else {
            this.toastr.error('Invalid Credentials.')
          }
        },
        err => {
          console.log(err);
        }
      );

  }

  logout() {
    localStorage.removeItem('userdetails');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
