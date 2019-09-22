import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VcAuthToken } from '@turing/shared/interfaces/vc-auth-token';

/**
 * @ngdoc service
 * @description
 * # jwtInterceptor
 */

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authToken: VcAuthToken) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqClone = req.clone({});

    const doNotSendTokenToThisUrls = ['/api/jwt/verify/', '/api/jwt/getLoginUrl/'];

    if (this.authToken.getToken() && doNotSendTokenToThisUrls.indexOf(reqClone.url) === -1) {
      reqClone.headers.set('USER-KEY', this.authToken.getToken());
    }

    return next.handle(reqClone);
  }
}
