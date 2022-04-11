import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  constructor() { }

  private loader = new BehaviorSubject(false);
  private weatherData = new BehaviorSubject(null);

  showLoader(){
    this.loader.next(true)
  }

  hideLoader(){
    setTimeout(() => {
      this.loader.next(false)
    }, 1000);
  }

  getLoaderObservable(){
    return this.loader.asObservable()
  }

  feedWeatherData(data: any){
    this.weatherData.next(data);
  }

  getWeatherData(){
    return this.weatherData.asObservable();
  }

}
