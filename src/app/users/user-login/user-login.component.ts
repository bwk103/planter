import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit(){
    var user = this.loginForm.value;
    this.userService.loginUser(user)
    .subscribe(
      (response: any ) => {
        this.loginForm.reset();
        localStorage.setItem('token', response.token);
        console.log(response);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
