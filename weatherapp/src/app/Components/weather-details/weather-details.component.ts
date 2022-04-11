import { Component, OnInit } from '@angular/core';
import { CommServiceService } from 'src/app/Services/comm-service.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  public weatherData: any = null
  public weatherIcon: string = ''
  constructor(private comm: CommServiceService) { }

  ngOnInit(): void {
    this.getWeatherData()
  }

  getWeatherData(){
    this.comm.getWeatherData().subscribe(res => {
      this.weatherData = res
      if(this.weatherData){
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
      }
    })
  }
}
