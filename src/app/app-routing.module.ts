import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';
import { TourHomeComponent } from './component/tour-home/tour-home.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderComponent } from './component/header/header.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

import { AdminStatisticsComponent } from './component/admin-statistics/admin-statistics.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';

import { TourGuideProfileComponent } from './component/tour-guide-profile/tour-guide-profile.component';
import { TourGuideComponent } from './component/tour-guide/tour-guide.component';
import { TourguideDashboardComponent } from './component/tourguide-dashboard/tourguide-dashboard.component';
import { TGReviewsComponent } from './component/tgreviews/tgreviews.component';
import { TGOverviewComponent } from './component/tgoverview/tgoverview.component';
import { TGToursComponent } from './component/tgtours/tgtours.component';
import { BookTourComponent } from './component/book-tour/book-tour.component';

import { ReviewCardComponent } from './component/review-card/review-card.component';
import { AdminReportComponent } from './component/admin-report/admin-report.component';

import { OurServiceComponent } from './component/our-service/our-service.component';


const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "home" , component:HomeComponent},
  {path:"about" , component:AboutUsComponent},
  {path:"contact" , component:ContactUsComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"tour" , component:TourHomeComponent},
  {path:"services" , component:DetailsComponent},
  {path:"header" , component:HeaderComponent},

  {path:"TourDetails/:id",component:TourDetailsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"service",component:OurServiceComponent},


  {path:"tour/:id",component:TourDetailsComponent},
  {path:"bookTour/:id",component:BookTourComponent},

  {path:"tourguide/:id",component:TourGuideProfileComponent,
    children: [
      {path:"",component:TGOverviewComponent,outlet:'TGProfile'},
      {
        path:"Upcoming-Tours",
        component:TGToursComponent,
        outlet:'TGProfile',
        data: {
          state:'Upcoming',
          isCompleted: false
        }
      },
      {
        path:"Past-Tours",
        component:TGToursComponent,
        outlet:'TGProfile',
        data: {
          state:'Past',
          isCompleted: true
        }
      },
      {path:"Reviews",component:TGReviewsComponent,outlet:'TGProfile'},
    ]},

  {path:"userregister" , component:UserregisterComponent},
  {path:"dashboard" , component:TourguideDashboardComponent},
<<<<<<< HEAD
  {path:"tourguide" , component:TourGuideComponent},
=======
  {path:"review" , component:ReviewCardComponent},
  {path:"report" , component:AdminReportComponent},
>>>>>>> e1aa5062041c1d6923e2e5e9b969b0bf64222573
  {path:"**" , component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
