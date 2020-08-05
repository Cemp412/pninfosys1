import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoderComponent } from './loder/loder.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { FeatureComponent } from './home/feature/feature.component';
import { TipsComponent } from './home/tips/tips.component';
import { CoursesComponent } from './home/courses/courses.component';
import { ServiceComponent } from './service/service.component';
import { CasesComponent } from './home/cases/cases.component';
import { QuoteComponent } from './home/quote/quote.component';
import { ClientComponent } from './home/client/client.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SkilComponent } from './home/skil/skil.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './home/services/services.component';
import { TranningComponent } from './tranning/tranning.component';
import { ContactComponent } from './contact/contact.component';
import { StudyComponent } from './home/study/study.component';
import { ClientsComponent } from './home/clients/clients.component';
import { RowsliderComponent } from './rowslider/rowslider.component';
import { PlacementdeskComponent } from './placementdesk/placementdesk.component';
import { PlacementdetailsComponent } from './placement/placementdetails/placementdetails.component';
import { PlacementgalleryComponent } from './placement/placementgallery/placementgallery.component';
import { TestimonialComponent } from './placement/testimonial/testimonial.component';
// MDB Angular Pro
import { CardsModule,  WavesModule } from 'ng-uikit-pro-standard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InternshipRegistrationComponent } from './internship-registration/internship-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempService } from './temp.service';
import { BirthdayComponent } from './events/birthday/birthday.component';
import { AnnualDayComponent } from './events/annual-day/annual-day.component';
import { TourComponent } from './events/tour/tour.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoderComponent,
    HeaderComponent,
    BannerComponent,
    FeatureComponent,
    TipsComponent,
    CoursesComponent,
    ServiceComponent,
    CasesComponent,
    QuoteComponent,
    ClientComponent,
    FooterComponent,
    HomepageComponent,
    SkilComponent,
    AboutComponent,
    ServicesComponent,
    TranningComponent,
   
    ContactComponent,
    
    StudyComponent,
    ClientsComponent,
    RowsliderComponent,
    PlacementdeskComponent,
    PlacementdetailsComponent,
    PlacementgalleryComponent,
    TestimonialComponent,
    InternshipRegistrationComponent,
    BirthdayComponent,
    AnnualDayComponent,
    TourComponent,
   
   
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    CardsModule,
    FormsModule,
    ReactiveFormsModule,
    WavesModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
