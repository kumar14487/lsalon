import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../../containers/services/http.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  modalRef: BsModalRef;
  mode = '';
  action = '';
  expandedRows = {};
  products: any = [];
  product = {};
  productImage;
  isModified = false;
  isNew = false;
  deleteId;
  imageUploading = false;
  constructor(private httpService: HttpService, private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    });

    // this.services = this.httpService.getMockData().services;
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    // let data =
    this.expandedRows = {
      [id.productId]: this.action === isActive
    };
    this.product = this.action === isActive ? JSON.parse(JSON.stringify(id)) : {};
    this.mode = this.action === isActive ? this.mode : '';
  }

  submitData() {
    this.httpService.saveProduct(this.product, this.isNew).subscribe(data => {
      this.toastr.success('Your data saved successfully!', 'Success!');
      this.products = data;
      this.isModified = false;
    });
  }
  resetData(rowData) {
    this.product = JSON.parse(JSON.stringify(rowData || {}));
  }

  deleteService() {
    this.httpService.deleteProduct(this.deleteId).subscribe(data => {
      this.toastr.success('Your data deleted successfully!', 'Success!');
      this.modalRef.hide();
      this.products = data;
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

  uploadFile(event) {
    this.imageUploading = true;
    const formData = new FormData();
    formData.append('file', <File>event.target.files[0]);
    this.httpService.uploadFile(formData).subscribe(data => {
      this.product['imgPath'] = data['imgPath'];
      this.imageUploading = false;
    })
  }


}
