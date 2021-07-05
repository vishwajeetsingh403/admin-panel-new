import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.auth.getAuthorizationToken();
    let ok: string;

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${authToken}`),
      });
      return next
        .handle(authReq)
        .pipe(catchError((event) => this.parseHttpError(event)));
    } else {
      return next
        .handle(req)
        .pipe(catchError((event) => this.parseHttpError(event)));
    }
  }

  private parseHttpError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.auth.logout();
    }
    return throwError(err);
  }
}
