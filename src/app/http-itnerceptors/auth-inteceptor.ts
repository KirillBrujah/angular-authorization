import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("access_token");

        if (!token) {
            return next.handle(req);
        }


        const authRequest = req.clone({
            headers: req.headers.append("Authorization", token),
        });

        return next.handle(authRequest);
    }
}