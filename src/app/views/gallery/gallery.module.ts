import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
