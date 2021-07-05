import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class DashboardService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;

  getDashboardList() {
    let url = this.baseUrl + "/v1/user/admin/portal/dashboard/00";
    return this.http.get<any[]>(url);
  }
}
