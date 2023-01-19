import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

/** getCategory API 服務 */
@Injectable({
  providedIn: 'root',
})
export class GetCategoryService {
  /** getCategory 資料 - 建構子 */
  constructor(
    /** Http:內部調用 Angular 內部 API HttpClient */
    private http: HttpClient
  ) {}

  /**
   * getCategory 資料 API
   * @returns API response
   */
  getCategory(): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/getCategory', {
        headers: {
          authorization: 'Bearer xxx',
        },
      })
      .pipe(map((res) => res));
  }
}
