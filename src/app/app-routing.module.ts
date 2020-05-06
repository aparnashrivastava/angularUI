import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BusBookingComponent } from './user-login/bus-booking/bus-booking.component';
import { CancelBookingComponent } from './user-login/cancel-booking/cancel-booking.component';
import { FeedbackComponent } from './user-login/feedback/feedback.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'user-signup',component:UserSignupComponent},
    {path:'user-login',component:UserLoginComponent,
    children:[
      {path:'bus-booking',component:BusBookingComponent},
    {path:'cancel-booking',component:CancelBookingComponent},
    {path:'feedback',component: FeedbackComponent}
    ]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
