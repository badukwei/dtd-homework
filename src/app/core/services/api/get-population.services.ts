import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** API 服務 */
@Injectable({
  providedIn: 'root',
})
export class GetPopulationService {
  /** Data 資料 - 建構子 */
  constructor(
    /** Http:內部調用 Angular 內部 API HttpClient */
    private http: HttpClient
  ) {}

  /**
   * 資料 API
   * @returns API response
   */
  getPopulation(): Observable<any> {
    return this.http
      .get('/api/v1/rest/datastore/301000000A-000605-067', {
        headers: {
          authorization: 'Bearer xxx',
        },
      })
      .pipe((res) => res);
  }
}
