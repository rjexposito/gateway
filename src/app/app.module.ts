import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

//Rutas
import { APPROUTINGMODULE } from './app.routes';

//Servicios



//Componentes
import { AppComponent } from './app.component';
import { GatewaysComponent } from './components/addgateways/addgateways.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authenication/login/login.component';
import { RegisterComponent } from './components/authenication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewaysComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APPROUTINGMODULE,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
