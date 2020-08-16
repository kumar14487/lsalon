import { Component, OnInit, TemplateRef } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpService } from '../../containers/services/http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../containers/services/data.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})


export class UserComponent implements OnInit {

  starttime= '';
  endtime= '';
  action = '';
  expandedRows = {};
  modalRef: BsModalRef;
  mode = '';
  users: any = [];
  user = {
    address: {}
  };
  isModified = false;
  productImage;
  isNew = false;
  imagePath;
  imageUploading = false;
  services:any = [];
  constructor(private httpService: HttpService, private modalService: BsModalService,
    private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDatas();
  }

  addNew() {
    this.isNew = !this.isNew;
    this.mode = this.isNew ? 'edit' : '';
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    // let data =
    this.expandedRows = {
      [id.empId]: this.action === isActive
    };
    this.user = this.action === isActive ? id : {};
    this.user.address = id.address ? id.address : {}
    // [id.user.phone] = this.action === isActive;
  }

  getDatas() {
    // this.dataService.users.subscribe(data => {
    //   if (data.length > 0) {
    //     this.users = data;
    //   } else {
        this.httpService.getUser().subscribe(datas => {
          this.users = [...datas['adminList'], ...datas['superadminList']];
        });
        this.httpService.getServices().subscribe(datas => {
          this.services = datas;
        });
    //   }
    // });
  }

  submitData() {
    this.httpService.addUser(this.user).subscribe(data => {
      this.toastr.success('Your data saved successfully!', 'Success!');
      // this.users = data;
      this.isModified = false;
      this.getDatas();
    });
  }
  resetData(rowData, isNew) {
    this.user = isNew ? { address: {} } : JSON.parse(JSON.stringify(rowData));
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
    this.httpService.deleteService(rowData).subscribe(data => {
    this.toastr.success('Your data deleted successfully!', 'Success!');
    this.getDatas();
    });
  }

  addUser() {
    this.httpService.addUser(this.user).subscribe(data => {
      this.toastr.success('Your data added successfully!', 'Success!');
      this.getDatas();
      this.isNew = false;
      this.mode = '';
    });
  }
  uploadFile(event) {
    const formData = new FormData();
    formData.append('file', <File>event.target.files[0]);
    this.imageUploading = true;
    this.httpService.uploadFile(formData).subscribe(data => {
      this.user['imgPath'] = data['imgPath'];
      this.imageUploading = false;
    })
  }

}
