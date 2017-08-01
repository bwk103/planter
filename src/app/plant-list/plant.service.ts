import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

import { Plant } from '../plant/plant.model';

@Injectable()

export class PlantService{

  constructor(private http: Http){

  }

  getPlants(){
    return this.http.get('http://localhost:3000/plants')
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()))
    }

  addPlant(plant: Plant){
    var newPlant = JSON.stringify(plant);
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/plants', plant, {headers: headers} )
      .map((response: Response) => response.json().object)
      .catch((error: Response) => Observable.throw(error.json()))
  }

}
