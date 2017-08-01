import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlantComponent } from './plant/plant.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { routing } from './app-routes';
import { PlantNewComponent } from './plant-new/plant-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    PlantListComponent,
    PlantNewComponent
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
