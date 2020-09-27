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

  isHomeLinkActivated:boolean =false;
  isAboutUsActivated:boolean =false;
  isServiceActivated:boolean =false;
  isGallaryActivated:boolean =false;
  isVideo1Activated:boolean =false;
  isVideo2Activated:boolean =false;
  isCutter1Activated:boolean =false;
  isCutter2Activated:boolean =false;
  isFindActivated:boolean =false;


  ngOnInit() { 
    this.isHomeLinkActivated =true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const con = this.el.nativeElement.querySelector('#sticky-header');
    if (event.target.scrollingElement.scrollTop > 200) {
      con.classList.add('sticky');
    } else {
      con.classList.remove('sticky');
    }
  }

  selectedLink(linkName)
  {
    switch(linkName)
    {
      case 'home':
        this.isHomeLinkActivated =true;
        this.isAboutUsActivated =false;
        this.isServiceActivated =false;
        this.isGallaryActivated =false;
        this.isVideo1Activated =false;
        this.isVideo2Activated =false;
        this.isCutter1Activated =false;
        this.isCutter2Activated =false;
        this.isFindActivated=false;
        break;

        case 'aboutus':
          this.isHomeLinkActivated =false;
          this.isAboutUsActivated =true;
          this.isServiceActivated =false;
          this.isGallaryActivated =false;
          this.isVideo1Activated =false;
          this.isVideo2Activated =false;
          this.isCutter1Activated =false;
          this.isCutter2Activated =false;
          this.isFindActivated=false;
          break;

          case 'service':
          this.isHomeLinkActivated =false;
          this.isAboutUsActivated =false;
          this.isServiceActivated =true;
          this.isGallaryActivated =false;
          this.isVideo1Activated =false;
          this.isVideo2Activated =false;
          this.isCutter1Activated =false;
          this.isCutter2Activated =false;
          this.isFindActivated=false;
          break;

          case 'gallary':
          this.isHomeLinkActivated =false;
          this.isAboutUsActivated =false;
          this.isServiceActivated =false;
          this.isGallaryActivated =true;
          this.isVideo1Activated =false;
          this.isVideo2Activated =false;
          this.isCutter1Activated =false;
          this.isCutter2Activated =false;
          this.isFindActivated=false;
          break;

          case 'video1':
          this.isHomeLinkActivated =false;
          this.isAboutUsActivated =false;
          this.isServiceActivated =false;
          this.isGallaryActivated =false;
          this.isVideo1Activated =true;
          this.isVideo2Activated =false;
          this.isCutter1Activated =false;
          this.isCutter2Activated =false;
          this.isFindActivated=false;
          break;

          case 'video2':
          this.isHomeLinkActivated =false;
          this.isAboutUsActivated =false;
          this.isServiceActivated =false;
          this.isGallaryActivated =false;
          this.isVideo1Activated =false;
          this.isVideo2Activated =true;
          this.isCutter1Activated =false;
          this.isCutter2Activated =false;
          this.isFindActivated=false;
          break;

          case 'cutter1':
            this.isHomeLinkActivated =false;
            this.isAboutUsActivated =false;
            this.isServiceActivated =false;
            this.isGallaryActivated =false;
            this.isVideo1Activated =false;
            this.isVideo2Activated =false;
            this.isCutter1Activated =true;
            this.isCutter2Activated =false;
            this.isFindActivated=false;
            break;

            case 'cutter2':
              this.isHomeLinkActivated =false;
              this.isAboutUsActivated =false;
              this.isServiceActivated =false;
              this.isGallaryActivated =false;
              this.isVideo1Activated =false;
              this.isVideo2Activated =false;
              this.isCutter1Activated =false;
              this.isCutter2Activated =true;
              this.isFindActivated=false;
              break;

              case 'findus':
              this.isHomeLinkActivated =false;
              this.isAboutUsActivated =false;
              this.isServiceActivated =false;
              this.isGallaryActivated =false;
              this.isVideo1Activated =false;
              this.isVideo2Activated =false;
              this.isCutter1Activated =false;
              this.isCutter2Activated =false;
              this.isFindActivated=true;
              break;

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
    if(this.form1){

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
}
