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
      image: new FormControl(null, Validators.required),
      type: new FormControl(null),
      height: new FormControl(null),
      width: new FormControl(null),
      colour: new FormControl(null)
    });
  }

  onSubmit(){
    var newPlant = new Plant(this.myForm.value.name,
                             this.myForm.value.image,
                             this.myForm.value.type,
                             this.myForm.value.height,
                             this.myForm.value.width,
                             this.myForm.value.colour
                           )
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
