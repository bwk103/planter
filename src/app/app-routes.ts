import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { IndivPlantComponent} from './indiv-plant/indiv-plant.component';


const appRoutes = [
  { path: '', component: SplashComponent, pathMatch: 'full'},
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/new', component: PlantNewComponent},
  { path: 'plants/:id', component: IndivPlantComponent},
  { path: 'users/register', component: UserNewComponent},
  { path: 'users/login', component: UserLoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
