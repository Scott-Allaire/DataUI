import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "admin";
  password:string = "password";

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(() => {
        console.log("Login successful");
      }, err => {
        console.log("Login failed", err);
      })
  }
}
