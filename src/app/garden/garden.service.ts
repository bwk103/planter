import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Plant } from '../plant/plant.model';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class GardenService {

constructor(private http: Http,
            private userService: UserService){

}




addToGarden(plant: any){
  var userID = this.userService.getUserID();
  // var newPlant = JSON.stringify(plant);
  var headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this.http.post('http://localhost:3000/user/' + userID + '/garden/' + plant._id, plant, {headers: headers} )
    .map((response: Response) => response.json().object)
    .catch((error: Response) => Observable.throw(error.json()))
}

}
