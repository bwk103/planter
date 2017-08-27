import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../users/user.service';
import { Params, ActivatedRoute } from '@angular/router';
import { User } from '../users/user.model';
import { Plant } from '../plant/plant.model';
import { GardenService } from './garden.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit, OnDestroy {

  garden: Plant[];
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private gardenService: GardenService) { }

  ngOnInit() {
    this.gardenService.getGarden()
    .subscribe(
      (response: any) => {
        this.garden = response.garden;
        console.log(this.garden)
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }

  ngOnDestroy(){
  }

}
