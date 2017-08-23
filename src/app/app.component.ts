import { Component } from '@angular/core';
import { PlantService } from './plant-list/plant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlantService]
})
export class AppComponent {
  title = 'app works!';
}
