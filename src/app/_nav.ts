import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Employees',
    url: '/admin/users',
    icon: 'icon-people'
  },
  {
    name: 'Services',
    url: '/admin/services',
    icon: 'icon-drop'
  },
  {
    name: 'Products',
    url: '/admin/products',
    icon: 'icon-pencil'
  },
  {
    name: 'Gallery',
    url: '/admin/gallery',
    icon: 'icon-picture'
  },
  {
    name: 'Open/Close Time',
    url: '/admin/shop-open-close-time',
    icon: 'icon-clock'
    
  },
  {
    name: 'Holiday Time Settings',
    url: '/admin/others',
    icon: 'icon-clock'
  },
  {
    name: 'Career',
    url: '/admin/others/career',
    icon: 'icon-people'
  },
];
