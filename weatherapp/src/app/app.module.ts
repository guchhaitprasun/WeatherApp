import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { WeatherDetailsComponent } from './Components/weather-details/weather-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { MatCardModule} from '@angular/material/card'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    WeatherDetailsComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    HttpClientModule, 
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
