import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-header-sl',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form: ElementRef;
  @ViewChild('form1') form1: ElementRef;
  constructor(private el: ElementRef) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const con = this.el.nativeElement.querySelector('#sticky-header');
    if (event.target.scrollingElement.scrollTop > 200) {
      con.classList.add('sticky');
    } else {
      con.classList.remove('sticky');
    }
  }

  ngAfterViewInit(): void {
    (<any>$(this.form.nativeElement)).magnificPopup({
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
  }
}
