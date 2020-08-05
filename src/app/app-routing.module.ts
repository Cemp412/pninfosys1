import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TranningComponent } from './tranning/tranning.component';

import { ContactComponent } from './contact/contact.component';
import { PlacementgalleryComponent } from './placement/placementgallery/placementgallery.component';
import { InternshipRegistrationComponent } from './internship-registration/internship-registration.component';
import { BirthdayComponent } from './events/birthday/birthday.component';
import { AnnualDayComponent } from './events/annual-day/annual-day.component';
import { TourComponent } from './events/tour/tour.component';
import { PlacementdeskComponent } from './placementdesk/placementdesk.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'tranning',component:TranningComponent},
  {path:'placement',component:PlacementdeskComponent},
  {path:'placement_gallery', component:PlacementgalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'internship-registration-page',component:InternshipRegistrationComponent},
  //Events Routes
  {path:'event/birthday',component:BirthdayComponent},
  {path:'event/aniversary',component:AnnualDayComponent},
  {path:'event/tour',component:TourComponent},
  //child routes
  {path:'workshop',loadChildren:()=>import('./workshop/workshop.module').then(m=>m.WorkshopModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
