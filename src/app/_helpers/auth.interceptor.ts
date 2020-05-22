import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';

//inspect and transform HTTP requests before they are sent to server

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) {}

    //gets HTTPRequest object, change it and forward to HttpHandler object's handle() method.
    //it transforms HTTPRequest object into an Observable<Events>.
    //next: HttpHandler object represents the next interceptor in the chain of interceptors.
    // The final ‘next’ in the chain is the Angular HttpClient.
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null){

            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
        }
        return next.handle(authReq); 
    }

}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];