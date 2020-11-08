import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(formValues) {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe((resp) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(["events"]);
        }
      });
  }

  cancel(): void {
    this.router.navigate(["events"]);
  }
}
