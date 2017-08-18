import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';
import { UserNewComponent } from './user-new/user-new.component';
import { UserLoginComponent } from './user-login/user-login.component';


const appRoutes = [
  { path: '', component: SplashComponent, pathMatch: 'full'},
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/new', component: PlantNewComponent},
  { path: 'user/new', component: UserNewComponent},
  { path: 'user/login', component: UserLoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
