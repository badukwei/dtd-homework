import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  SearchRequest,
  SearchResponse,
} from '@app/core/model/kkbox/search/search.model';
import { Observable } from 'rxjs';

/** 搜尋服務 */
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  /** 搜尋服務 - 建構子 */
  constructor(
    /** Http:內部調用 Angular 內部 API HttpClient */
    private http: HttpClient
  ) {}

  /**
   * KKBOX 搜尋 API
   * @param request - API request 資料
   * @returns API response 資料
   */
  search(request: SearchRequest): Observable<SearchResponse> {
    const objToString = new URLSearchParams(Object.entries(request)).toString();
    return this.http.get<SearchResponse>(
      `https://api.kkbox.com/v1.1/search?${objToString}`
    );
  }
}
