import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { WeatherData2 } from '../models/weather2.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

   get(cityName: string): Observable<WeatherData2>{
     return this.http.get<WeatherData2>(environment.weatherApiBaseUrl, {
       headers: new HttpHeaders()
       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
       params: new HttpParams()
       .set('location', cityName)
       // .set('dt', '07/09/2022')
       // .set('mode', 'json')
     })
   }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>("https://open-weather13.p.rapidapi.com/city/" + cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    });
  }

}
