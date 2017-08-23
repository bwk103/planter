import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../users/user.service';
import { Params, ActivatedRoute } from '@angular/router';
import { User } from '../users/user.model';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id']
    this.userSubscription = this.userService.getUser(id)
    .subscribe(
      (user: User) => {
        this.user = user
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
