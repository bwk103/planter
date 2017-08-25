import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router) { }

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
      (response: any) => {
        this.router.navigate(['/plants'])
        localStorage.setItem('token', response.token);
        this._flashMessagesService.show("Yay! You're in! Welcome to Planter!", { cssClass: 'alert-success', timeout: 3000 });
        console.log('User created successfully');
      },
      (error) => {
        this.registerForm.reset();
        this._flashMessagesService.show("Oops, there's been a problem.  Please try again", { cssClass: 'alert-danger', timeout: 3000 });
        console.log(error)
      }
    )
  }

}
