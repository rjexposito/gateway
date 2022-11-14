import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewaysComponent } from './components/addgateways/addgateways.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addgateways', component: GatewaysComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class APPROUTINGMODULE { }
