import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Weather } from './weather.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class WeatherService {

  yesterday: Weather;
  today: Weather;
  tomorrow: Weather;

  constructor(private http: Http){
  }

  // getWeather(){
  //   return this.http.get('http://api.apixu.com/v1/history.json?key=00e32a15b042448ba9f103156172308&q=London&dt=2017-08-22')
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => Observable.throw(error.json()))
  // }


}
