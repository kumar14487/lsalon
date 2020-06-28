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
    name: 'Time Settings',
    url: '/admin/others',
    icon: 'icon-people'
  },
  {
    name: 'Career',
    url: '/admin/others/career',
    icon: 'icon-people'
  },
];
