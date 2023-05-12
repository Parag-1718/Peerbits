import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let user = localStorage.getItem("userData: ")
    // let userdata = user && JSON.parse(user)
    // console.log(userdata.idToken);

    const apiKey = environment.apiKey;

    const newRequest = request.clone({
     params : new HttpParams().set('key', apiKey),
    })
    return next.handle(newRequest);
  }
}
