import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpEventType,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    private consolrUrl = 'http://localhost:8093/';

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let req = request;
        if (request.url.startsWith('$')) {
            req = request.clone({
                url: (this.consolrUrl + request.url)
            });
        }

        return next.handle(req);

    }
}
