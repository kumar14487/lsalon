import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  allData = {
    "employeeVos": [{
      "empId": 4,
      "name": "sakthi",
      "emailId": "sakthi@gmail.com",
      "gender": "F",
      "experience": 0,
      "phone": "1234567890",
      "dateOfBirth": null,
      "imgPath": null,
      "joiningOfDate": "2019-11-16 23:04:47",
      "address": {
        "addressId": 1,
        "city": "chennai",
        "country": "India",
        "pincode": "639205",
        "state": "TN",
        "addressLine": "tamil nagar",
        "street": "tamil nagar"
      },
      "serviceLists": [{
        "serviceId": 1,
        "serviceName": "HAIRCUT",
        "serviceDesc": "HAIRCUT",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 2,
        "serviceName": "HAIRCUT AND WASH",
        "serviceDesc": "HAIRCUT AND WASH",
        "prices": 11.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 3,
        "serviceName": "FADE CUT",
        "serviceDesc": "FADE CUT",
        "prices": 11.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 4,
        "serviceName": "FOIL SKIN FADE",
        "serviceDesc": "FOIL SKIN FADE",
        "prices": 15.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 5,
        "serviceName": "BEARD SHAPE",
        "serviceDesc": "BEARD SHAPE",
        "prices": 9.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 6,
        "serviceName": "BEARD SHAVE",
        "serviceDesc": "BEARD SHAVE",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 7,
        "serviceName": "BEARD TRIM",
        "serviceDesc": "BEARD TRIM",
        "prices": 6.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 8,
        "serviceName": "HEAD MASSAGE",
        "serviceDesc": "HEAD MASSAGE",
        "prices": 5.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 9,
        "serviceName": "THREADING",
        "serviceDesc": "THREADING",
        "prices": 4.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 10,
        "serviceName": "FACIAL",
        "serviceDesc": "FACIAL",
        "prices": 10.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 11,
        "serviceName": "EAR PIERCING",
        "serviceDesc": "EAR PIERCING",
        "prices": 6.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 12,
        "serviceName": "HAIR COLOR",
        "serviceDesc": "HAIR COLOR",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }],
      "message": null,
      "roleid": 0,
      "productLists": null,
      "user": null,
      "readOnly": false
    }, {
      "empId": 6,
      "name": "rajesh",
      "emailId": "rajesh@gmail.com",
      "gender": "M",
      "experience": 0,
      "phone": "1234567890",
      "dateOfBirth": null,
      "imgPath": null,
      "joiningOfDate": "2019-11-17 00:44:56",
      "address": {
        "addressId": 3,
        "city": "chennai",
        "country": "India",
        "pincode": "639205",
        "state": "TN",
        "addressLine": "tamil nagar",
        "street": "tamil nagar"
      },
      "serviceLists": [{
        "serviceId": 1,
        "serviceName": "HAIRCUT",
        "serviceDesc": "HAIRCUT",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 2,
        "serviceName": "HAIRCUT AND WASH",
        "serviceDesc": "HAIRCUT AND WASH",
        "prices": 11.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 3,
        "serviceName": "FADE CUT",
        "serviceDesc": "FADE CUT",
        "prices": 11.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 4,
        "serviceName": "FOIL SKIN FADE",
        "serviceDesc": "FOIL SKIN FADE",
        "prices": 15.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 5,
        "serviceName": "BEARD SHAPE",
        "serviceDesc": "BEARD SHAPE",
        "prices": 9.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 6,
        "serviceName": "BEARD SHAVE",
        "serviceDesc": "BEARD SHAVE",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 7,
        "serviceName": "BEARD TRIM",
        "serviceDesc": "BEARD TRIM",
        "prices": 6.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 8,
        "serviceName": "HEAD MASSAGE",
        "serviceDesc": "HEAD MASSAGE",
        "prices": 5.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 9,
        "serviceName": "THREADING",
        "serviceDesc": "THREADING",
        "prices": 4.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 10,
        "serviceName": "FACIAL",
        "serviceDesc": "FACIAL",
        "prices": 10.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 11,
        "serviceName": "EAR PIERCING",
        "serviceDesc": "EAR PIERCING",
        "prices": 6.0,
        "imgPath": null,
        "employeeVoList": null
      }, {
        "serviceId": 12,
        "serviceName": "HAIR COLOR",
        "serviceDesc": "HAIR COLOR",
        "prices": 8.0,
        "imgPath": null,
        "employeeVoList": null
      }],
      "message": null,
      "roleid": 0,
      "productLists": null,
      "user": null,
      "readOnly": false
    }],
    "serviceVos": [{
      "serviceId": 1,
      "serviceName": "HAIRCUT",
      "serviceDesc": "HAIRCUT",
      "prices": 8.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 2,
      "serviceName": "HAIRCUT AND WASH",
      "serviceDesc": "HAIRCUT AND WASH",
      "prices": 11.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 3,
      "serviceName": "FADE CUT",
      "serviceDesc": "FADE CUT",
      "prices": 11.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 4,
      "serviceName": "FOIL SKIN FADE",
      "serviceDesc": "FOIL SKIN FADE",
      "prices": 15.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 5,
      "serviceName": "BEARD SHAPE",
      "serviceDesc": "BEARD SHAPE",
      "prices": 9.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 6,
      "serviceName": "BEARD SHAVE",
      "serviceDesc": "BEARD SHAVE",
      "prices": 8.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 7,
      "serviceName": "BEARD TRIM",
      "serviceDesc": "BEARD TRIM",
      "prices": 6.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 8,
      "serviceName": "HEAD MASSAGE",
      "serviceDesc": "HEAD MASSAGE",
      "prices": 5.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 9,
      "serviceName": "THREADING",
      "serviceDesc": "THREADING",
      "prices": 4.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 10,
      "serviceName": "FACIAL",
      "serviceDesc": "FACIAL",
      "prices": 10.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 11,
      "serviceName": "EAR PIERCING",
      "serviceDesc": "EAR PIERCING",
      "prices": 6.0,
      "imgPath": null,
      "employeeVoList": null
    }, {
      "serviceId": 12,
      "serviceName": "HAIR COLOR",
      "serviceDesc": "HAIR COLOR",
      "prices": 8.0,
      "imgPath": null,
      "employeeVoList": null
    }],
    "productVos": [{
      "productId": 1,
      "productName": "PRODUCT1",
      "prodcutDesc": "PRODUCT1",
      "productPrice": 8.0,
      "prodImgPath": "/image/path"
    }, {
      "productId": 2,
      "productName": "PRODUCT2",
      "prodcutDesc": "PRODUCT2",
      "productPrice": 11.0,
      "prodImgPath": "/image/path"
    }, {
      "productId": 3,
      "productName": "PRODUCT3",
      "prodcutDesc": "PRODUCT3",
      "productPrice": 11.0,
      "prodImgPath": "/image/path"
    }, {
      "productId": 4,
      "productName": "PRODUCT4",
      "prodcutDesc": "PRODUCT4",
      "productPrice": 15.0,
      "prodImgPath": "/image/path"
    }, {
      "productId": 5,
      "productName": "PRODUCT5",
      "prodcutDesc": "PRODUCT5",
      "productPrice": 9.0,
      "prodImgPath": "/image/path"
    }, {
      "productId": 6,
      "productName": "PRODUCT6",
      "prodcutDesc": "PRODUCT6",
      "productPrice": 8.0,
      "prodImgPath": "/image/path"
    }],
    "orderServiceVos": [{
      "orderserviceid": 12,
      "orderid": 0,
      "serviceid": 6,
      "empid": 18,
      "serviceName": "test1",
      "appointmentTime": "11-15-2019 12:57:08",
      "phoneNumber": null,
      "customerid": 18,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 10,
      "orderid": 0,
      "serviceid": 5,
      "empid": 16,
      "serviceName": "test1",
      "appointmentTime": "11-15-2019 12:57:08",
      "phoneNumber": null,
      "customerid": 16,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 9,
      "orderid": 0,
      "serviceid": 4,
      "empid": 15,
      "serviceName": "test1",
      "appointmentTime": "11-15-2019 12:57:08",
      "phoneNumber": null,
      "customerid": 15,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 8,
      "orderid": 0,
      "serviceid": 3,
      "empid": 14,
      "serviceName": "test1",
      "appointmentTime": "11-15-2019 12:57:08",
      "phoneNumber": null,
      "customerid": 14,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 7,
      "orderid": 0,
      "serviceid": 2,
      "empid": 13,
      "serviceName": "test1",
      "appointmentTime": "11-15-2019 12:57:08",
      "phoneNumber": null,
      "customerid": 13,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 1,
      "orderid": 0,
      "serviceid": 1,
      "empid": 4,
      "serviceName": "test",
      "appointmentTime": "11-17-2019 02:27:11",
      "phoneNumber": null,
      "customerid": 4,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 2,
      "orderid": 0,
      "serviceid": 1,
      "empid": 6,
      "serviceName": "test",
      "appointmentTime": "11-17-2019 02:30:10",
      "phoneNumber": null,
      "customerid": 4,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 3,
      "orderid": 0,
      "serviceid": 1,
      "empid": 9,
      "serviceName": "test",
      "appointmentTime": "11-17-2019 10:26:27",
      "phoneNumber": null,
      "customerid": 9,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 4,
      "orderid": 0,
      "serviceid": 1,
      "empid": 10,
      "serviceName": "test1",
      "appointmentTime": "11-17-2019 10:43:18",
      "phoneNumber": null,
      "customerid": 10,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 5,
      "orderid": 0,
      "serviceid": 1,
      "empid": 11,
      "serviceName": "test1",
      "appointmentTime": "11-17-2019 10:51:26",
      "phoneNumber": null,
      "customerid": 11,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 6,
      "orderid": 0,
      "serviceid": 1,
      "empid": 12,
      "serviceName": "test1",
      "appointmentTime": "11-17-2019 11:07:18",
      "phoneNumber": null,
      "customerid": 12,
      "emailid": null,
      "name": null
    }, {
      "orderserviceid": 11,
      "orderid": 0,
      "serviceid": 5,
      "empid": 17,
      "serviceName": "test1",
      "appointmentTime": "11-17-2019 12:52:16",
      "phoneNumber": null,
      "customerid": 17,
      "emailid": null,
      "name": null
    }]
  }

  public usersSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public serviceSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public productSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public bookingSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public users: Observable<any> = this.usersSubject.asObservable();
  public product: Observable<any> = this.productSubject.asObservable();;
  public services: Observable<any> = this.serviceSubject.asObservable();;
  public bookings: Observable<any> = this.bookingSubject.asObservable();;

  constructor(private httpService: HttpService) {
    // this.usersSubject = new BehaviorSubject<any>([]);
    // this.users = this.usersSubject.asObservable();
  }

  setData() {
    this.httpService.getAllDatas().subscribe(data => {
      this.usersSubject.next(data['employeeVos']);
      this.bookingSubject.next(data['orderServiceVos']);
      this.productSubject.next(data['productVos']);
      this.serviceSubject.next(data['serviceVos']);
    });
  }
}
