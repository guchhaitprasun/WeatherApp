import { Component, OnInit } from '@angular/core';
import { CommServiceService } from 'src/app/Services/comm-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public showSpinner: boolean = false;
  constructor(private comm: CommServiceService) { }

  ngOnInit(): void {
    this.comm.getLoaderObservable().subscribe(res => {
      this.showSpinner = res;
    })
  }

}
