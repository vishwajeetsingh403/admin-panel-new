import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnDestroy, OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  subscription = new Subscription();

  ngOnInit() {
    if (window.localStorage.getItem("x-almien-user-token")) {
      this.router.navigate(["dashboard"]);
    }
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(256),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(256),
    ]),
  });

  onSubmit() {
    let payload = this.loginForm.getRawValue();
    if (this.loginForm.valid) {
      this.subscription.add(
        this.auth.login(payload).subscribe((data: any) => {
          let token = data.headers.get("x-almien-user-token");
          if (!window.localStorage.getItem("x-almien-user-token")) {
            window.localStorage.setItem("x-almien-user-token", token);
            this.router.navigate(["dashboard"]);
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
