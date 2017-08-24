import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  yesterdayWeather: string;
  todayWeather: Weather;
  tomorrowWeather: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.getWeather();
  }

  // getWeather(){
  //   this.weatherService.getWeather()
  //   .subscribe(
  //     (weather: any) => {
  //       var recWeather = new Weather(
  //                                   weather.location.name,
  //                                   weather.forecast.forecastday[0].date,
  //                                   weather.forecast.forecastday[0].condition.text,
  //                                   weather.forecast.forecastday[0].condition.icon,
  //                                   weather.forecast.forecastday[0].condition.totalprecip_mm
  //       )
  //       this.todayWeather = recWeather;
  //     },
  //     (error: Error) => {
  //       console.log(error)
  //     }
  //   )
  // }

}
