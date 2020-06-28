import { Component, OnInit, TemplateRef } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpService } from '../../containers/services/http.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../containers/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  action = '';
  expandedRows = {};
  modalRef: BsModalRef;
  mode = '';
  bookings: any = [];
  booking = {};
  isModified = false;
  constructor(private httpService: HttpService, private modalService: BsModalService,
    private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDatas();
  }

  rowExpand(id, i, isActive) {
    this.action = this.action === isActive ? '' : isActive;
    // let data =
    this.expandedRows = {
      [id.empId]: this.action === isActive
    };
    this.booking = this.action === isActive ? id : {};
    // [id.user.phone] = this.action === isActive;
  }

  getDatas() {
    // this.dataService.bookings.subscribe(data => {
    //   if (data.length > 0) {
    //     this.bookings = data;
    //   } else {
        this.httpService.getBookings().subscribe(datas => {
          let bookings = [];
          for(let i=datas['orderServiceVos'].length-1; i>=0; i--){
            bookings.push(datas['orderServiceVos'][i])
          }
          this.bookings = bookings;
          // datas['orderServiceVos'].forEach(element => {
          // });;

        });
    //   }
    // });
  }

  submitData() {
    // this.httpService.saveService(this.services).subscribe(data => {
    this.toastr.success('Your data saved successfully!', 'Success!');
    this.getDatas();
    // });
  }
  resetData(rowData) {
    this.bookings = JSON.parse(JSON.stringify(rowData));
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
}
