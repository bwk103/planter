import { PlantListComponent } from './plant-list/plant-list.component';
import { RouterModule } from '@angular/router';


const appRoutes = [
  { path: '', redirectTo: '/plants', pathMatch: 'full'},
  { path: 'plants', component: PlantListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
