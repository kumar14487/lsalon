import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../../../containers/services/http.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  

  modalRef: BsModalRef;
  mode = '';
  action = '';
  expandedRows = {};
  careers: any = [];
  career = {};
  isModified = false;
  isNew = false;
  deleteId;
  constructor(private httpService: HttpService, private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    this.httpService.getCareer().subscribe(data => {
      this.careers = data;
    });
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    this.expandedRows = {
      [id.id]: this.action === isActive
    };
    this.career = this.action === isActive ? JSON.parse(JSON.stringify(id)) : {};
    this.mode = this.action === isActive ? this.mode : '';
  }

  submitData() {
    this.httpService.saveCareer(this.career, this.isNew).subscribe(data => {
      this.toastr.success('Your data saved successfully!', 'Success!');
      this.careers = data;
      this.isModified = false;
    });
  }
  resetData(rowData) {
    this.career = JSON.parse(JSON.stringify(rowData || {}));
  }

  deleteCareer() {
    this.httpService.deleteCareer(this.deleteId).subscribe(data => {
      this.toastr.success('Your data deleted successfully!', 'Success!');
      this.modalRef.hide();
      this.careers = data;
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
}
