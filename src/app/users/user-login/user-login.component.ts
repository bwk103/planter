import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required,
                                      Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required,
                                      Validators.minLength(3)])
    });
  }

  onSubmit(){
    var user = this.loginForm.value;
    this.userService.loginUser(user)
    .subscribe(
      (response: any ) => {
        this.router.navigate(['/plants'])
        this._flashMessagesService.show('Welcome back', { cssClass: 'alert-success', timeout: 2500 });
        localStorage.setItem('token', response.token);
        this.userService.setToken(response.token);
      },
      (error) => {
        this._flashMessagesService.show("There's been a problem signing you in. Please try again.", { cssClass: 'alert-danger' });
        console.log(error)
      }
    )
  }

}
