import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';
import { CareerComponent } from './career/career.component';


const routes: Routes = [
    {
        path: '',
        component: OthersComponent,
        data: {
            title: 'Others'
        }
    },
    {
        path: 'career',
        component: CareerComponent,
        data: {
            title: 'Career'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OthersRoutingModule { }
