import { Component, OnInit, Input } from '@angular/core';
import { Plant } from './plant.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(selectedPlant){
    this.router.navigate(['/plants/' + selectedPlant._id]);
  }

}
