import { NgModule } from '@angular/core';
import { WorkshopComponent } from './workshop.component';

import { BentchairComponent } from './bentchair/bentchair.component';
import { Routes, RouterModule } from '@angular/router';
import { MpctComponent } from './mpct/mpct.component';
import { RjitComponent } from './rjit/rjit.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';


const routes: Routes = [
  {path:'',component:WorkshopComponent,
  children:[
  {path:'bentchair',component:BentchairComponent},
  {path:'mpct',component:MpctComponent},
  {path:'rjit',component:RjitComponent},
  {path:'xiaomi',component:XiaomiComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
