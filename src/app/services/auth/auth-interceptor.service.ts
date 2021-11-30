import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    
    const idToken = localStorage.getItem("access_token");
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
        "Bearer " + idToken)
      });
        
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
