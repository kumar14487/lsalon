import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpService } from '../../containers/services/http.service';
import { ToastrService } from 'ngx-toastr';

@NgModule({
 imports: [
     BrowserModule,
     OwlDateTimeModule,
     OwlNativeDateTimeModule,
 ],
})
@Component({
  selector: 'app-shop-open-close-time',
  templateUrl: './shop-open-close-time.component.html',
  styleUrls: ['./shop-open-close-time.component.css']
})
export class ShopOpenCloseTimeComponent implements OnInit {
  dayNames = [];
  startTime;
  endTime;
  selectedDay;
  day;

  isEnabled = true;

  constructor(private httpService: HttpService,  private toastr: ToastrService) { }
  ngOnInit(): void {
    this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  save(){
    this.startTime = new Date(this.startTime);
    this.endTime = new Date(this.endTime);
    // this.startTime.setHours(this.startTime.getHours() - 12 );
    this.startTime = this.startTime.getHours()+":"+this.startTime.getMinutes()+":"+this.startTime.getSeconds();
    this.endTime = this.endTime.getHours()+":"+this.endTime.getMinutes()+":"+this.endTime.getSeconds();
    console.log(this.startTime+" ------------------- "+this.endTime);
 

    let obj={
      "opentime": this.startTime,
       "closetime": this.endTime,
       "day":"SUNDAY",
       "slotTime":45,
       "enabled": this.isEnabled == true ? 'Y' : 'N'
  }

  this.httpService.enableSunday(obj).subscribe(res => {
    this.toastr.success('Updated successfully');
  }, error => {
    this.toastr.error('Update Failed');
  })
  

  }

  getSelectedDay(day){
    this.selectedDay=day;
  }

}
