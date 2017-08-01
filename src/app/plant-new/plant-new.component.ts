import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlantService } from '../plant-list/plant.service';
import { Plant } from '../plant/plant.model';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.css']
})
export class PlantNewComponent implements OnInit {

  myForm: FormGroup;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    var newPlant = new Plant(this.myForm.value.name, this.myForm.value.image)
    this.plantService.addPlant(newPlant)
      .subscribe(
        (plant: Plant) => {
          console.log(plant)
        },
        (error) => {
          console.log(error)
        }
      )
  };

}
