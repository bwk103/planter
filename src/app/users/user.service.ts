import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';




@Injectable()

export class UserService {

  public token: string;

  constructor(private http: Http,
              router: Router){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  createUser(user: User){
    var newUser = JSON.stringify(user);
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()));
    }

  loginUser(user: any) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/login', user, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
