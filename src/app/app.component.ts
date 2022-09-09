import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData2 } from './models/weather2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }

  weatherData?: WeatherData;
  weatherData2?: WeatherData2;

  

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName='';
    //this.weatherService.getWeatherData('Novara')
    

    // this.weatherService.getWeatherData('Novara')
    // .subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     this.weatherData.main.temp = (response.main.temp -32)/1.8000
    //     this.weatherData.main.temp_max = (response.main.temp_max -32)/1.8000
    //     this.weatherData.main.temp_min = (response.main.temp_min -32)/1.8000

    //     console.log(response);
    //   }
    // });
    
  }

  cityName: string = 'Novara';
  onSubmit(){
    this.getWeather(this.cityName);
    this.cityName='';
  }

  private getWeather(cityName: string){
    this.weatherService.get(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData2 = response;
        // this.weatherData2!.current_observation = response.current_observation;
        // this.weatherData2!.forecasts = response.forecasts;
        // this.weatherData2!.location = response.location;


        this.weatherData2.current_observation.condition.temperature = (response.current_observation.condition.temperature -32)/1.8000
        this.weatherData2.forecasts[0].high = (response.forecasts[0].high -32)/1.8000
        this.weatherData2.forecasts[0].low = (response.forecasts[0].low -32)/1.8000

        console.log(response);
      }
    });
  }

}
