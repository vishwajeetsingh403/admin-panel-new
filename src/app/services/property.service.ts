import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PropertyService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;

  getProperties(params) {
    let url = this.baseUrl + "/v1/user/admin/property/list";
    return this.http.get<any[]>(url, { params });
  }

  getFilteredData(params) {
    let requestUrl = this.baseUrl + "/v1/user/admin/apply/filters";
    return this.http.get<any[]>(requestUrl, { params });
  }
}
