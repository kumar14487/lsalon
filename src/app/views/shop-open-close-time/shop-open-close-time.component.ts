import {Component, OnInit} from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
  constructor() { }
  ngOnInit(): void {
    this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  save(){
    this.startTime = new Date(this.startTime);
    this.endTime = new Date(this.endTime);
    this.startTime.setHours(this.startTime.getHours() - 12 );
    this.startTime = this.startTime.getHours()+":"+this.startTime.getMinutes()+":"+this.startTime.getSeconds();
    this.endTime = this.endTime.getHours()+":"+this.endTime.getMinutes()+":"+this.endTime.getSeconds();
    console.log(this.startTime+" ------------------- "+this.endTime);
  }

}
