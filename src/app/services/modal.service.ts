import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class ModalService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;
  modalContent;
  statusType;

  postStatus(data) {
    let url = `${environment.baseUrl}/v1/admin/updateStatus`;
    return this.http.post(url, data);
  }

  getHeaders(id) {
    let url = `${environment.baseUrl}/v1/admin/partner/token/${id}`;
    return this.http.get(url, { responseType: "text", observe: "response" });
  }
}
