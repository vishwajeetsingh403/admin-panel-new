import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class ServiceService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;

  getServices(params) {
    let url = this.baseUrl + "/v1/user/admin/services/list";
    return this.http.get<any[]>(url, { params });
  }
}
