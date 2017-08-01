import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()

export class PlantService{

  constructor(private http: Http){

  }

  getPlants(){
    return this.http.get('http://localhost:3000/plants')
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()))
    }

}
