import { Component, OnInit } from '@angular/core';
import { PlantService } from './plant.service';
import { Plant } from '../plant/plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Plant[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.plantService.getPlants()
      .subscribe(
        (plants: any) => {
          this.plants = plants
        },
        (error: Error) => {
          console.log(error)
        }
      )
  }
}
