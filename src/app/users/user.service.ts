import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';


@Injectable()

export class UserService {

  public token: string;
  private name: string;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http,
              private router: Router){
  }

  createUser(user: User){
    var newUser = JSON.stringify(user);
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/user/register', user, {headers: headers})
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()));
    }

  loginUser(user: any) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/user/login', user, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  setToken(token){
    this.token = token;
  }

  setName(name){
    this.name = name;
  }

  isAuthenticated(){
    return tokenNotExpired();
  }

  logOutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/plants'])
    this.token = null;
    this.name = null;
  }

  userName(){
    return this.name;
  }

  getUser(id: string){
    return this.http.get('http://localhost:3000/user/' + id)
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()))
  }

  getUserID(){
    var token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(this.token).user_id;
    } else {
      return null;
    }
  }

}
