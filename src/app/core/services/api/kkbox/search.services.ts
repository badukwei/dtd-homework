import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(): Observable<any> {
    return this.http.get('https://api.kkbox.com/v1.1/search?q=為你我受冷風吹&type=track&territory=TW')
  }
}
