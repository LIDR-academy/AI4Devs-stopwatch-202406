// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Optional: Redirect invalid routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
