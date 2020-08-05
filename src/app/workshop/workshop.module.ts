import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { BentchairComponent } from './bentchair/bentchair.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { MpctComponent } from './mpct/mpct.component';
import { RjitComponent } from './rjit/rjit.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';



@NgModule({
  declarations: [
    WorkshopComponent,
     BentchairComponent,
     Header1Component,
     Footer1Component,
     MpctComponent,
     RjitComponent,
     XiaomiComponent,
    
    
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule
  ]
})
export class WorkshopModule { }
