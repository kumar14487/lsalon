import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../../containers/services/http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  timingDetails;
  tDetail = {};
  defaultStr: any = '';
  modalRef: BsModalRef;
  mode = '';
  action = '';
  expandedRows = {};
  // products: any = [];
  // tDetail = {};
  productImage;
  isModified = false;
  isNew = false;
  deleteId;
  // defaultTiming;

  constructor(private httpService: HttpService, private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    
    this.httpService.defaultDetailsStr().subscribe(data => {
      this.defaultStr = data[0]; // 'Mon-Fri (9.00 AM - 8.00 PM) <br> Sat(8.00 AM - 8.00 PM) <br> Sunday Closed';
      delete this.defaultStr.createDate;
    });
    this.httpService.timingDetailsGet().subscribe(data => {
      this.timingDetails = data;
    });
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    // let data =
    this.expandedRows = {
      [id.id]: this.action === isActive
    };
    if (this.action === isActive) {
      this.tDetail = JSON.parse(JSON.stringify(id));
      this.tDetail['openTime'] = new Date(this.tDetail['openTime']);
      this.tDetail['closeTime'] = new Date(this.tDetail['closeTime']);
    } else {
      this.tDetail = {};
    }
    this.mode = this.action === isActive ? this.mode : '';
  }

  resetData(rowData) {
    this.tDetail = JSON.parse(JSON.stringify(rowData || {}));
  }

  deleteService() {
    this.httpService.timingDetailsDelete(this.deleteId).subscribe(data => {
      this.toastr.success('Your data deleted successfully!', 'Success!');
      this.modalRef.hide();
      this.tDetail = data;
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

  submitData() {
    this.httpService.timingDetailsSubmit(this.tDetail, this.isNew).subscribe(data => {
      this.toastr.success('Your data saved successfully!', 'Success!');
      this.tDetail = data;
      this.isModified = false;
    });
  }

  saveDefaultdata() {
    this.httpService.defaultDetailsSubmit(this.defaultStr).subscribe(data => {
      this.toastr.success('Your data saved successfully!', 'Success!');
      this.tDetail = data;
      this.isModified = false;
    });
  }

}
