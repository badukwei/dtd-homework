import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** API 服務 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /** Data 資料 - 建構子 */
  constructor(private http: HttpClient) {}

  /**
   * 資料 API
   * @returns API response
   */
  dataApi(): Observable<any> {
    return this.http
      .get('/api/v1/rest/datastore/301000000A-000605-067', {
        headers: {
          authorization: 'Bearer xxx',
        },
      })
      .pipe((res) => res);
  }
}
