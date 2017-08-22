import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSignOut(){
    this.userService.logOutUser();
  }

  loggedIn(){
    return this.userService.isAuthenticated()
  }

  getName(){
    return this.userService.userName();
  }

}
