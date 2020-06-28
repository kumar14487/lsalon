import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as $ from 'jquery';
import 'magnific-popup';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from '../../containers/services/http.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit, AfterViewInit {

  @ViewChild('form1') form1: ElementRef;
  @ViewChild('form2') form2: ElementRef;
  @ViewChild('form3') form3: ElementRef;

  services: any = [];
  products: any = [];
  barbers: any = [];
  gallay: any = [];
  careers: any = [];
  timingDetails: any = [];
  defaultTimeStr;

  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,

    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    // navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 2,
        nav: true
      },
      992: {
        items: 3
      }
    }
  };

  constructor(private httpService: HttpService, protected _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getDatas();
  }

  ngAfterViewInit(): void {
    (<any>$(this.form1.nativeElement)).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    (<any>$(this.form2.nativeElement)).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

    (<any>$(this.form3.nativeElement)).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

    (<any>$('.popup-image')).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  getDatas() {
    // this.httpService.getCustomerPageData().subscribe(data => {
    // this.services = this.httpService.getMockData().services;    // data.services
    // this.products = this.httpService.getMockData().products;
    // this.barbers = this.httpService.getMockData().barbers;
    // this.gallay = this.httpService.getMockData().gallary;
    this.httpService.getServices().subscribe(data => {
      this.services = data;
    });
    this.httpService.getUser().subscribe(datas => {
      this.barbers = datas['adminList'];
    });
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.httpService.getGalleryList().subscribe(data => {
      this.gallay = data;
    });
    this.httpService.getCareer().subscribe(data => {
      this.careers = data;
    });
    this.httpService.timingDetailsGet().subscribe(data => {
    this.timingDetails = data;
    // data.defaultStr | 'Mon-Fri (9.00 AM - 8.00 PM) <br> Sat(8.00 AM - 8.00 PM) <br> Sunday Closed';
  });
  
  this.httpService.defaultDetailsStr().subscribe(data => {
    const defaultStr = "Mon-Fri (9.00 AM - 8.00 PM) <br> Sat(8.00 AM - 8.00 PM) <br> Sunday Closed"; // data[0].openclosetime;
    this.defaultTimeStr = this._sanitizer.bypassSecurityTrustHtml(defaultStr);

    })
    // })
  }

}
