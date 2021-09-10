import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';


@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  cities: string[] = [];
  city: any = 'Krasnodar';
  userInput: string = '';
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {}

  getCity(city: string) {

    this.weatherService.getWeatherByCity(city).subscribe((res) => {
      console.log(res)
      this.city = res
      this.cities.push(city)
      console.log(this.city.name)
      console.log(this.cities)

    })

    // this.cities = this.city.name.push(city)
    console.log(this.city.name)
    console.log(this.cities)
    // console.log(this.cities)
    // return this.cities;
  }



  // getCity() {

  //   this.weatherService.getWeatherByCity(this.userInput).subscribe((res) => {
  //     console.log(res)
  //     this.city = res
  //     console.log(this.city.name)
  //     console.log(this.cities)

  //   })

  //   this.cities.push(this.city)
  //   this.userInput = '';
  //   console.log(this.city.name)
  //   console.log(this.cities)
  //   // console.log(this.cities)
  //   // return this.cities;
  // }

}
