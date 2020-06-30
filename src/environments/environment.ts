// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  host: 'http://',
  domain: '34.220.200.4:',  // '34.220.200.4:',  // ip
  port: '8080',               // port
  // domain: 'https://lsalonservice.azurewebsites.net', http://34.220.200.4:8080/lsalon/servicesUsers
  // port: '',
  baseUrl: '/lsalon', // '<start up URl>',  // startup URL


  // login url

  login: '/login',

  // customer URL
  getCustomerPageData: '',
  saveBooking: '/bookAppoitment',
  getServiceUSer: '/multipleServices',
  getAvailableSlots: '/availableslots',

  // user url

  allMasterData: '/allMasterData',
  productList: '/products',
  deleteProduct: '/products/',
  serviceList: '/servicesUsers',
  saveService: '/services',
  deleteService: '/services',
  userAction: '/users/list', // add(post), update(put)
  deleteUser: '/user/',
  addUser: '/user',
  imageUpload: '/upload',
  fileUpload: '/upload',
  gallery: '/gallary',
  timings: '/shoptime',
  timeStr: '/shopopenclosetime',
  career: '/career',
  // defaultTiming: '/shopopenclosetime'
};
