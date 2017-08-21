import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit(){
    var newUser = new User(this.registerForm.value.username,
                            this.registerForm.value.email,
                            this.registerForm.value.password)
    this.userService.createUser(newUser)
    .subscribe(
      (user: User) => {
        this.registerForm.reset();
        console.log('User created successfully');
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
