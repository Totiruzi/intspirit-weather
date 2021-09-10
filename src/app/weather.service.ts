import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl

  getWeatherByCity(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('unit', 'imperial')
    return this.http.get(this.url, {params} );
  }
}
