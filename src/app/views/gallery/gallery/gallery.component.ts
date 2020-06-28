import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../containers/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryList:any = [];
  gallery:any = {}
  imageUploading = false;
  constructor(private httpService: HttpService, private toastr: ToastrService) { }

  ngOnInit() {
    this.httpService.getGalleryList().subscribe(data => {
      this.galleryList = data;
    })
  }

  uploadFile(event) {
    this.imageUploading = true;
    const formData = new FormData();
    formData.append('file', <File>event.target.files[0]);
    this.httpService.uploadFile(formData).subscribe(data => {
      this.gallery['imgPath'] = data['imgPath'];
      this.gallery['fileName']
      this.imageUploading = false;
    })
  }

  addGallery() {
    this.httpService.addGallery(this.gallery).subscribe(data => {
      this.toastr.success('Your data added successfully!', 'Success!');
      this.ngOnInit();
    });
  }

}
