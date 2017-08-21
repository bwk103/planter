import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant/plant.model';
import { PlantService } from '../plant-list/plant.service';

import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-indiv-plant',
  templateUrl: './indiv-plant.component.html',
  styleUrls: ['./indiv-plant.component.css']
})
export class IndivPlantComponent implements OnInit {

  plant: Plant;

  constructor(private plantService: PlantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    var plantId = this.route.snapshot.params['id'];
    this.plantService.getPlant(plantId)
      .subscribe(
        (plant: any) => {
          this.plant = plant
        },
        (error: Error) => {
          console.log(error)
        }
      )
  }

}
