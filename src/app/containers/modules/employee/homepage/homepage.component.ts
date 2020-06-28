import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('form1') form1: ElementRef;
  @ViewChild('form2') form2: ElementRef;
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

  slidesStore = [
    {
      id: 1,
      src: 'assets/style1/img/gallery/1.png',
      alt: 'img',
      title: 'image1'
    },
    {
      id: 2,
      src: 'assets/style1/img/gallery/2.png',
      alt: 'img',
      title: 'image1'
    },
    {
      id: 3,
      src: 'assets/style1/img/gallery/3.png',
      alt: 'img',
      title: 'image1'
    },
    {
      id: 4,
      src: 'assets/style1/img/gallery/2.png',
      alt: 'img',
      title: 'image1'
    },
    {
      id: 5,
      src: 'assets/style1/img/gallery/3.png',
      alt: 'img',
      title: 'image1'
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    (<any>$(this.form1.nativeElement)).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if ($(window).width() < 700) {
            console.log('asdfasdf');
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
        beforeOpen: function() {
          if ($(window).width() < 700) {
            console.log('asdfasdf');
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
}
