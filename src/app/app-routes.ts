import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';


const appRoutes = [
  { path: '', component: SplashComponent, pathMatch: 'full'},
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/new', component: PlantNewComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
