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
      username: new FormControl(null, [Validators.required,
                                       Validators.minLength(3)
                                      ]),
      email: new FormControl(null, [Validators.required,
                                    Validators.email
                                    ]),
      location: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required,
                                      Validators.minLength(3)
                                      ])
    });
  }

  onSubmit(){
    var newUser = new User(this.registerForm.value.username,
                            this.registerForm.value.email,
                            this.registerForm.value.password,
                            this.registerForm.value.location,
                            []);
                            console.log(newUser)
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
