import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  baseUrl: string = environment.baseUrl;
  token: string;

  getAuthorizationToken() {
    if (!this.token)
      this.token = window.localStorage.getItem("x-almien-user-token");
    return this.token;
  }

  login(data: any) {
    let url = this.baseUrl + "/v1/user/login";
    return this.http.post(url, data, { observe: "response" });
  }

  logout() {
    window.localStorage.removeItem("x-almien-user-token");
    this.token = undefined;
    this.router.navigate(["/login"]);
  }
}
