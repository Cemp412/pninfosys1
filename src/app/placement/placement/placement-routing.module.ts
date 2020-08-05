import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacementdeskComponent } from 'src/app/placementdesk/placementdesk.component';
import { PlacementdetailsComponent } from '../placementdetails/placementdetails.component';
import { PlacementgalleryComponent } from '../placementgallery/placementgallery.component';


const routes: Routes = [
  {path:'',component:PlacementdeskComponent,
  children:[
    {path:'placement_details',component:PlacementdetailsComponent},
    {path:'placement_gallery', component:PlacementgalleryComponent},
],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementRoutingModule { }
