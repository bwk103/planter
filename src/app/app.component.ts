import { Component } from '@angular/core';
import { PlantService } from './plant-list/plant.service';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlantService, UserService]
})
export class AppComponent {
  title = 'app works!';
}
