import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EmpBaseComponent } from './emp-base/emp-base.component';

const routes: Routes = [
  {
    path: '',
    component: EmpBaseComponent,

    children: [
      {
        path: 'home',
        component: HomepageComponent
      },
      { path: '', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule {}
