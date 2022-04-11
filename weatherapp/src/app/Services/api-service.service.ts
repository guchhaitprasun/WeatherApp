import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommServiceService } from './comm-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private APIKey: string
  constructor(private http: HttpClient, private comm: CommServiceService) {
    this.APIKey = '3639ce8cf19e0b3d4922dd81da317c38'
   }

  public GetWeatherData(CityName: string): Observable<any>{
    this.comm.showLoader();
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${this.APIKey}&units=metric`)
  }
}
