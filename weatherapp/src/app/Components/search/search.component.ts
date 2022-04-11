import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CommServiceService } from 'src/app/Services/comm-service.service';
import * as moment from 'moment'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public weatherForm: FormGroup;
  public noFound: boolean = false;
  public weatherData: any = null;
  
  constructor(private fb: FormBuilder, private api: ApiServiceService, private comm: CommServiceService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.weatherForm = this.fb.group({
      cityName: ['', Validators.required]
    })
  }

  getWeatherData(){
    if(this.weatherForm.valid){
      this.api.GetWeatherData(this.weatherForm.value.cityName).subscribe(res => {
        if(res){
          this.noFound = false
          this.weatherData = res
          // this.weatherData.sys.sunrise = moment(this.weatherData.sys.sunrise).format('MM-DD-YYYY HH:mm:ss')
          // this.weatherData.sys.sunset = moment(this.weatherData.sys.sunset).format('MM-DD-YYYY HH:mm:ss')
          console.log(res);
          this.comm.hideLoader()
          this.comm.feedWeatherData(res)
        }
        
      }, error => {
        this.noFound = true
        this.weatherData = null
        this.comm.hideLoader();
        this.comm.feedWeatherData(null)
      })
      
    }
  }
}
