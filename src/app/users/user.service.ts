import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()

export class UserService {

  constructor(private http: Http){
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

}
