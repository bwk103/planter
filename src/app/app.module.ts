import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlantComponent } from './plant/plant.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { routing } from './app-routes';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { IndivPlantComponent } from './indiv-plant/indiv-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    PlantListComponent,
    PlantNewComponent,
    HeaderComponent,
    SplashComponent,
    UserNewComponent,
    UserLoginComponent,
    IndivPlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
