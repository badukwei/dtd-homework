import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SearchResponse } from '@app/model/kkbox/search/search.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) { }

  search(data: any): Observable<SearchResponse> {
    const objToString = new URLSearchParams(Object.entries(data)).toString()
    return this.http.get<SearchResponse>(`https://api.kkbox.com/v1.1/search?${objToString}`)
  }
}
