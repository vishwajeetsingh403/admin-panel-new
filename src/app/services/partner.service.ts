import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PartnerService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;

  getPartners(params) {
    let url = this.baseUrl + "/v1/user/admin/partner/list";
    return this.http.get<any[]>(url, { params });
  }
}
