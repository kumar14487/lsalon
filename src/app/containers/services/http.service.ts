import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL = '';

  constructor(private http: HttpClient) {
    this.URL = environment.host + environment.domain + environment.port + environment.baseUrl;
  }

  getMockData() {
    const dataObj = {
      services: [],
      products: [],
      barbers: [],
      gallary: [],
      times: []
    };
    dataObj.services = [{
      'serviceId': 1,
      'serviceName': 'HAIRCUT',
      'serviceDesc': 'HAIRCUT',
      'prices': 8.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/1.png'
    }, {
      'serviceId': 2,
      'serviceName': 'HAIRCUT AND WASH',
      'serviceDesc': 'HAIRCUT AND WASH',
      'prices': 11.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/2.png'
    }, {
      'serviceId': 3,
      'serviceName': 'FADE CUT',
      'serviceDesc': 'FADE CUT',
      'prices': 11.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/3.png'
    }, {
      'serviceId': 4,
      'serviceName': 'FOIL SKIN FADE',
      'serviceDesc': 'FOIL SKIN FADE',
      'prices': 15.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/4.png'
    }, {
      'serviceId': 5,
      'serviceName': 'BEARD SHAPE',
      'serviceDesc': 'BEARD SHAPE',
      'prices': 9.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/5.png'
    }, {
      'serviceId': 6,
      'serviceName': 'BEARD SHAVE',
      'serviceDesc': 'BEARD SHAVE',
      'prices': 8.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/6.png'
    }, {
      'serviceId': 7,
      'serviceName': 'BEARD TRIM',
      'serviceDesc': 'BEARD TRIM',
      'prices': 6.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/7.png'
    }, {
      'serviceId': 8,
      'serviceName': 'HEAD MASSAGE',
      'serviceDesc': 'HEAD MASSAGE',
      'prices': 5.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/8.png'
    }, {
      'serviceId': 9,
      'serviceName': 'THREADING',
      'serviceDesc': 'THREADING',
      'prices': 4.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/9.png'
    }, {
      'serviceId': 10,
      'serviceName': 'FACIAL',
      'serviceDesc': 'FACIAL',
      'prices': 10.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/10.png'
    }, {
      'serviceId': 11,
      'serviceName': 'EAR PIERCING',
      'serviceDesc': 'EAR PIERCING',
      'prices': 6.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/2.png'
    }, {
      'serviceId': 12,
      'serviceName': 'HAIR COLOR',
      'serviceDesc': 'HAIR COLOR',
      'prices': 8.0,
      'time': '00.30',
      'imageURL': 'assets/style1/img/service/3.png'
    }];
    dataObj.products = [{
      'productId': 1,
      'productName': 'PRODUCT1',
      'prodcutDesc': 'PRODUCT1',
      'productPrice': 8.0,
      'prodImgPath': '/image/path'
    }, {
      'productId': 2,
      'productName': 'PRODUCT2',
      'prodcutDesc': 'PRODUCT2',
      'productPrice': 11.0,
      'prodImgPath': '/image/path'
    }, {
      'productId': 3,
      'productName': 'PRODUCT3',
      'prodcutDesc': 'PRODUCT3',
      'productPrice': 11.0,
      'prodImgPath': '/image/path'
    }, {
      'productId': 4,
      'productName': 'PRODUCT4',
      'prodcutDesc': 'PRODUCT4',
      'productPrice': 15.0,
      'prodImgPath': '/image/path'
    }, {
      'productId': 5,
      'productName': 'PRODUCT5',
      'prodcutDesc': 'PRODUCT5',
      'productPrice': 9.0,
      'prodImgPath': '/image/path'
    }, {
      'productId': 6,
      'productName': 'PRODUCT6',
      'prodcutDesc': 'PRODUCT6',
      'productPrice': 8.0,
      'prodImgPath': '/image/path'
    }];
    dataObj.barbers = [{
      'name': 'siva',
      'emailId': 'sivasankarse@gmail.com',
      'imageUrl': 'assets/style1/img/team/1.png',
      'gender': 'M',
      'experience': 9,
      'address': {
        'city': 'chennai',
        'country': 'in',
        'pincode': 600000,
        'state': 'tn',
        'street': 'str'
      },
      'serviceLists': [{
        'serviceId': 1,
        'serviceName': 'HAIRCUT',
        'serviceDesc': 'HAIRCUT',
        'prices': 8.0
      }, {
        'serviceId': 2,
        'serviceName': 'HAIRCUT AND WASH',
        'serviceDesc': 'HAIRCUT AND WASH',
        'prices': 11.0
      }, {
        'serviceId': 3,
        'serviceName': 'FADE CUT',
        'serviceDesc': 'FADE CUT',
        'prices': 11.0
      }, {
        'serviceId': 4,
        'serviceName': 'FOIL SKIN FADE',
        'serviceDesc': 'FOIL SKIN FADE',
        'prices': 15.0
      }, {
        'serviceId': 5,
        'serviceName': 'BEARD SHAPE',
        'serviceDesc': 'BEARD SHAPE',
        'prices': 9.0
      }, {
        'serviceId': 6,
        'serviceName': 'BEARD SHAVE',
        'serviceDesc': 'BEARD SHAVE',
        'prices': 8.0
      }, {
        'serviceId': 7,
        'serviceName': 'BEARD TRIM',
        'serviceDesc': 'BEARD TRIM',
        'prices': 6.0
      }, {
        'serviceId': 8,
        'serviceName': 'HEAD MASSAGE',
        'serviceDesc': 'HEAD MASSAGE',
        'prices': 5.0
      }, {
        'serviceId': 9,
        'serviceName': 'THREADING',
        'serviceDesc': 'THREADING',
        'prices': 4.0
      }, {
        'serviceId': 10,
        'serviceName': 'FACIAL',
        'serviceDesc': 'FACIAL',
        'prices': 10.0
      }, {
        'serviceId': 11,
        'serviceName': 'EAR PIERCING',
        'serviceDesc': 'EAR PIERCING',
        'prices': 6.0
      }, {
        'serviceId': 12,
        'serviceName': 'HAIR COLOR',
        'serviceDesc': 'HAIR COLOR',
        'prices': 8.0
      }],
      'productLists': null,
      'user': {
        'userId': 0,
        'userName': null,
        'passWord': null
      },
      'readOnly': false
    },
    {
      'name': 'Rajesh',
      'emailId': 'sivasankarse@gmail.com',
      'imageUrl': 'assets/style1/img/team/2.png',
      'gender': 'M',
      'experience': 9,
      'phone': '98766677876',
      'address': {
        'city': null,
        'country': null,
        'pincode': null,
        'state': null,
        'street': null
      },
      'serviceLists': [{
        'serviceId': 1,
        'serviceName': 'HAIRCUT',
        'serviceDesc': 'HAIRCUT',
        'prices': 8.0
      }, {
        'serviceId': 2,
        'serviceName': 'HAIRCUT AND WASH',
        'serviceDesc': 'HAIRCUT AND WASH',
        'prices': 11.0
      }, {
        'serviceId': 3,
        'serviceName': 'FADE CUT',
        'serviceDesc': 'FADE CUT',
        'prices': 11.0
      }, {
        'serviceId': 4,
        'serviceName': 'FOIL SKIN FADE',
        'serviceDesc': 'FOIL SKIN FADE',
        'prices': 15.0
      }, {
        'serviceId': 5,
        'serviceName': 'BEARD SHAPE',
        'serviceDesc': 'BEARD SHAPE',
        'prices': 9.0
      }, {
        'serviceId': 6,
        'serviceName': 'BEARD SHAVE',
        'serviceDesc': 'BEARD SHAVE',
        'prices': 8.0
      }, {
        'serviceId': 7,
        'serviceName': 'BEARD TRIM',
        'serviceDesc': 'BEARD TRIM',
        'prices': 6.0
      }, {
        'serviceId': 8,
        'serviceName': 'HEAD MASSAGE',
        'serviceDesc': 'HEAD MASSAGE',
        'prices': 5.0
      }, {
        'serviceId': 9,
        'serviceName': 'THREADING',
        'serviceDesc': 'THREADING',
        'prices': 4.0
      }, {
        'serviceId': 10,
        'serviceName': 'FACIAL',
        'serviceDesc': 'FACIAL',
        'prices': 10.0
      }, {
        'serviceId': 11,
        'serviceName': 'EAR PIERCING',
        'serviceDesc': 'EAR PIERCING',
        'prices': 6.0
      }, {
        'serviceId': 12,
        'serviceName': 'HAIR COLOR',
        'serviceDesc': 'HAIR COLOR',
        'prices': 8.0
      }],
      'productLists': null,
      'user': {
        'userId': 2,
        'userName': null,
        'passWord': null
      },
      'readOnly': false
    },
    {
      'name': 'Jack',
      'emailId': 'sivasankarse@gmail.com',
      'imageUrl': 'assets/style1/img/team/3.png',
      'gender': 'M',
      'experience': 9,
      'address': {
        'city': null,
        'country': null,
        'pincode': null,
        'state': null,
        'street': null
      },
      'serviceLists': [{
        'serviceId': 1,
        'serviceName': 'HAIRCUT',
        'serviceDesc': 'HAIRCUT',
        'prices': 8.0
      }, {
        'serviceId': 2,
        'serviceName': 'HAIRCUT AND WASH',
        'serviceDesc': 'HAIRCUT AND WASH',
        'prices': 11.0
      }, {
        'serviceId': 3,
        'serviceName': 'FADE CUT',
        'serviceDesc': 'FADE CUT',
        'prices': 11.0
      }, {
        'serviceId': 4,
        'serviceName': 'FOIL SKIN FADE',
        'serviceDesc': 'FOIL SKIN FADE',
        'prices': 15.0
      }, {
        'serviceId': 5,
        'serviceName': 'BEARD SHAPE',
        'serviceDesc': 'BEARD SHAPE',
        'prices': 9.0
      }, {
        'serviceId': 6,
        'serviceName': 'BEARD SHAVE',
        'serviceDesc': 'BEARD SHAVE',
        'prices': 8.0
      }, {
        'serviceId': 7,
        'serviceName': 'BEARD TRIM',
        'serviceDesc': 'BEARD TRIM',
        'prices': 6.0
      }, {
        'serviceId': 8,
        'serviceName': 'HEAD MASSAGE',
        'serviceDesc': 'HEAD MASSAGE',
        'prices': 5.0
      }, {
        'serviceId': 9,
        'serviceName': 'THREADING',
        'serviceDesc': 'THREADING',
        'prices': 4.0
      }, {
        'serviceId': 10,
        'serviceName': 'FACIAL',
        'serviceDesc': 'FACIAL',
        'prices': 10.0
      }, {
        'serviceId': 11,
        'serviceName': 'EAR PIERCING',
        'serviceDesc': 'EAR PIERCING',
        'prices': 6.0
      }, {
        'serviceId': 12,
        'serviceName': 'HAIR COLOR',
        'serviceDesc': 'HAIR COLOR',
        'prices': 8.0
      }],
      'productLists': null,
      'user': {
        'userId': 3,
        'userName': null,
        'passWord': null
      },
      'readOnly': false
    },
    {
      'name': 'Mani',
      'emailId': 'sivasankarse@gmail.com',
      'imageUrl': 'assets/style1/img/team/4.png',
      'gender': 'M',
      'experience': 9,
      'address': {
        'city': null,
        'country': null,
        'pincode': null,
        'state': null,
        'street': null
      },
      'serviceLists': [{
        'serviceId': 1,
        'serviceName': 'HAIRCUT',
        'serviceDesc': 'HAIRCUT',
        'prices': 8.0
      }, {
        'serviceId': 2,
        'serviceName': 'HAIRCUT AND WASH',
        'serviceDesc': 'HAIRCUT AND WASH',
        'prices': 11.0
      }, {
        'serviceId': 3,
        'serviceName': 'FADE CUT',
        'serviceDesc': 'FADE CUT',
        'prices': 11.0
      }, {
        'serviceId': 4,
        'serviceName': 'FOIL SKIN FADE',
        'serviceDesc': 'FOIL SKIN FADE',
        'prices': 15.0
      }, {
        'serviceId': 5,
        'serviceName': 'BEARD SHAPE',
        'serviceDesc': 'BEARD SHAPE',
        'prices': 9.0
      }, {
        'serviceId': 6,
        'serviceName': 'BEARD SHAVE',
        'serviceDesc': 'BEARD SHAVE',
        'prices': 8.0
      }, {
        'serviceId': 7,
        'serviceName': 'BEARD TRIM',
        'serviceDesc': 'BEARD TRIM',
        'prices': 6.0
      }, {
        'serviceId': 8,
        'serviceName': 'HEAD MASSAGE',
        'serviceDesc': 'HEAD MASSAGE',
        'prices': 5.0
      }, {
        'serviceId': 9,
        'serviceName': 'THREADING',
        'serviceDesc': 'THREADING',
        'prices': 4.0
      }, {
        'serviceId': 10,
        'serviceName': 'FACIAL',
        'serviceDesc': 'FACIAL',
        'prices': 10.0
      }, {
        'serviceId': 11,
        'serviceName': 'EAR PIERCING',
        'serviceDesc': 'EAR PIERCING',
        'prices': 6.0
      }, {
        'serviceId': 12,
        'serviceName': 'HAIR COLOR',
        'serviceDesc': 'HAIR COLOR',
        'prices': 8.0
      }],
      'productLists': null,
      'user': {
        'userId': 4,
        'userName': null,
        'passWord': null
      },
      'readOnly': false
    }];
    dataObj.gallary = [
      {
        id: 1,
        src: 'assets/style1/img/gallery/1.png',
        alt: 'img',
        title: 'image1'
      },
      {
        id: 2,
        src: 'assets/style1/img/gallery/2.png',
        alt: 'img',
        title: 'image1'
      },
      {
        id: 3,
        src: 'assets/style1/img/gallery/3.png',
        alt: 'img',
        title: 'image1'
      },
      {
        id: 4,
        src: 'assets/style1/img/gallery/2.png',
        alt: 'img',
        title: 'image1'
      },
      {
        id: 5,
        src: 'assets/style1/img/gallery/3.png',
        alt: 'img',
        title: 'image1'
      }
    ];
    dataObj.times = [
      {
        "id": 14,
        "openTime": "2020-01-02 06:20:21.000",
        "closeTime": "2020-01-02 23:20:21.000",
        "description": "close shop for pongal"
      },
      {
        "id": 15,
        "openTime": "2020-01-03 06:20:21.000",
        "closeTime": "2020-01-07 23:20:21.000",
        "description": "close shop for pongal"
      }
    ];

    return dataObj;
  }

  getAllDatas() {
    return this.http.get(this.URL + environment.allMasterData);
  }

  getCustomerPageData() {
    return this.http.get(this.URL + environment.getCustomerPageData);
  }

  getUser() {
    return this.http.get(this.URL + environment.userAction);
  }

  getProducts() {
    return this.http.get(this.URL + environment.productList);
  }

  getServices() {
    return this.http.get(this.URL + environment.serviceList);
  }

  getCareer(){
    return this.http.get(this.URL + environment.career)
  }

  saveCareer(career, isNew){
    // return this.http.post(this.URL + environment.career, career);
    let url =  this.URL + environment.career;
    return this.http[isNew ? 'post' : 'put'](url, career);
  }

  // editCareer(career){
  //   return this.http.put(this.URL + environment.career, career);
  // }

  deleteCareer(career){
    return this.http.delete(this.URL + environment.career + '/' + career);
  }

  saveProduct(data, isNew) {
    let url = isNew ? this.URL + environment.productList : this.URL + environment.productList + '/' + data.productId
    return this.http[isNew ? 'post' : 'put'](url, data);
  }

  deleteProduct(id) {
    return this.http.delete(this.URL + environment.productList + '/' + id);
  }

  deleteService(rowData) {
    return this.http.delete(this.URL + environment.deleteService + '/' + rowData);
  }

  deleteUser(rowData) {
    return this.http.delete(this.URL + environment.deleteUser + '/' + rowData);
  }

  uploadFile(file) {
    return this.http.post(this.URL + environment.fileUpload, file);
  }

  saveService(data, isNew) {
    let url = isNew ? this.URL + environment.saveService : this.URL + environment.saveService + '/' + data.serviceId
    return this.http[isNew ? 'post' : 'put'](url, data);
  }

  saveBooking(data) {
    return this.http.post(this.URL + environment.saveBooking, data);
  }

  getUserDetails(serviceList){
    return this.http.post(this.URL + environment.getServiceUSer, serviceList);
  }

  getAvailableSlots(empId,appoitmentDate){
    return this.http.get(this.URL + environment.getAvailableSlots+'/'+empId+'/'+appoitmentDate);
  }

  addUser(data) {
    return this.http.post(this.URL + environment.addUser, data);
  }

  getBookings() {
    return this.http.get(this.URL + environment.allMasterData);
  }

  getGalleryList() {
    return this.http.get(this.URL + environment.gallery);
  }
  addGallery(data) {
    return this.http.post(this.URL + environment.gallery, data);
  }

  timingDetailsGet() {
    return this.http.get(this.URL + environment.timings);
  }
  timingDetailsSubmit(data, method) {
    if (method) {
      return this.http.post(this.URL + environment.timings, data);
    } else {
      return this.http.put(this.URL + environment.timings, data);
    }
  }
  timingDetailsDelete(data) {
    return this.http.delete(this.URL + environment.timings + '/' + data);
  }

  defaultDetailsSubmit(data) {
    return this.http.put(this.URL + environment.timeStr, data);
  }

  defaultDetailsStr() {
    return this.http.get(this.URL + environment.timeStr);
  }
}
