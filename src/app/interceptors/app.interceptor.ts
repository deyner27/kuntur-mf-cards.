import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let intReq = request;
    const token = this.authService.getToken();
    if (token) {
      intReq = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(intReq);
  }
}

export const interceptorSpringProvider = [{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }]