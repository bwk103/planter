import { Component, OnInit, Input } from '@angular/core';
import { Plant } from './plant.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
