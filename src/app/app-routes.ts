import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { IndivPlantComponent} from './indiv-plant/indiv-plant.component';
import { GardenComponent } from './garden/garden.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { PlantComponent } from './plant/plant.component';


const appRoutes = [
  { path: '', component: SplashComponent, pathMatch: 'full'},
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/new', component: PlantNewComponent, canActivate: [AuthGuardService]},
  { path: 'plants/:id', component: PlantComponent},
  { path: 'user/register', component: UserNewComponent},
  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/:id/garden', component: GardenComponent, canActivate: [AuthGuardService]}
];

export const routing = RouterModule.forRoot(appRoutes);
