import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlanComponent } from './plan/plan.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'plan', component: PlanComponent},
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
