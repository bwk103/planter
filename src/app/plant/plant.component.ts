import { Component, OnInit, Input } from '@angular/core';
import { Plant } from './plant.model';
import { PlantService } from '../plant-list/plant.service';
import { UserService } from '../users/user.service';
import { GardenService } from '../garden/garden.service';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private plantService: PlantService,
              private userService: UserService,
              private gardenService: GardenService) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.plantService.getPlant(id)
    .subscribe(
      (plant: any) => {
        this.plant = plant
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }

  onSubmit(selectedPlant){
    this.router.navigate(['/plants/' + selectedPlant._id]);
  }

  onAddToGarden(){
    this.gardenService.addToGarden(this.plant)
    .subscribe(
      (userGarden: any) => {
        console.log(userGarden);
      },
      (error: Error) => {
        console.log(error)
      }
    )
    // this.router.navigate(['/user/' + userID + '/garden/' + this.plant._id])
  }

}
