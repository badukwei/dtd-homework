import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = `Bearer ${localStorage.getItem('userToken')}`
    const newHeader = { setHeaders: { Authorization: token ?? '' } }
    const newRequest = req.clone(newHeader)
    return next.handle(newRequest)
  }
}
