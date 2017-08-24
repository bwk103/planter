import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignOut(){
    this.userService.logOutUser();
  }

  onGarden(){
    var id = this.userService.getUserID();
    this.userId = id;
    this.router.navigate(['/user/' + this.userId + '/garden']);
  }

  loggedIn(){
    return this.userService.isAuthenticated()
  }

}
