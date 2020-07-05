import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { AuthGuard } from './containers/guards/auth.guard';
import { ShopOpenCloseTimeComponent } from './views/shop-open-close-time/shop-open-close-time.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'admin',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LandingpageComponent,
    data: {
      title: 'startup'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./views/users/user.module').then(
            m => m.UserModule
          )
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./views/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./views/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./views/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'others',
        loadChildren: () =>
          import('./views/others/others.module').then(
            m => m.OthersModule
          )
      },
      
      {
        path: 'shop-open-close-time',
        component: ShopOpenCloseTimeComponent
       
      },
      
      // {
      //   path: 'theme',
      //   loadChildren: () =>
      //     import('./views/theme/theme.module').then(m => m.ThemeModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () =>
      //     import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      // }
    ]
  },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
