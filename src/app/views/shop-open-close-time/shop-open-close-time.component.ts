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
  constructor() { }
  ngOnInit(): void {
    this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  save(){
    
  }

}
