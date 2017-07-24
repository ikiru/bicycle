import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  current_user = {};

  constructor(private _userService: UserService) {}

  propagateUser(user) {
    this.current_user = user;
  }
  createUser(newUser) {
    console.log("in app component");
    console.log(newUser);
    return this._userService
      .create(newUser)
      .then(user => {
        console.log(user);
        if (user.errors) {
        } else {
          this.propagateUser(user);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
