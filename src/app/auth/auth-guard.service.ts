import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from '../users/user.service';

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService,
              private router: Router){

  }

  canActivate(){
    if (this.userService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
