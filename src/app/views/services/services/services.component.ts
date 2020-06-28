import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpService } from '../../../containers/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  modalRef: BsModalRef;
  mode = '';
  action = '';
  expandedRows = {};
  services: any = [];
  service = {};
  isModified = false;
  isNew = false;
  deleteId;
  imagePath;
  imageUploading = false;
  constructor(private httpService: HttpService, private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    this.httpService.getServices().subscribe(data => {
      this.services = data;      
    });

    // this.services = this.httpService.getMockData().services;
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    // let data =
    this.expandedRows = {
      [id.serviceId]: this.action === isActive
    };
    this.service = this.action === isActive ? JSON.parse(JSON.stringify(id)) : {};
    this.mode = this.action === isActive ? this.mode : '';
  }

  submitData() {    
    this.httpService.saveService(this.service, this.isNew).subscribe(data => {
    this.toastr.success('Your data saved successfully!', 'Success!');
    this.services = data;
    this.isModified = false;
    });
  }
  resetData(rowData) {
    this.service = JSON.parse(JSON.stringify(rowData || {}));
  }

  deleteService() {
    this.httpService.deleteService(this.deleteId).subscribe(data => {
      this.toastr.success('Deleted successfully', 'Success');
      this.modalRef.hide();
      this.services = data
    });
  }

  addNew() {
    this.isNew = !this.isNew;
    this.mode = this.isNew ? 'edit' : '';
  }

  confirm() {
    this.expandedRows = {};
    this.mode = '';
    this.action = '';
    this.isModified = false;
    this.modalRef.hide();
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteData(rowData) {
    // this.httpService.deleteService(rowData).subscribe(data => {
    this.toastr.success('Your data deleted successfully!', 'Success!');
    this.getDatas();
    // });
  }

  uploadFile(event) {
    this.imageUploading = true;
    const formData = new FormData();
    formData.append('file', <File>event.target.files[0]);
    this.httpService.uploadFile(formData).subscribe(data => {
      console.log(data);
      this.service['imgPath'] = data['imgPath'];
      this.imageUploading = false;
    })
  }

}
