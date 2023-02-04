import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

/** API 回傳基本格式 */
interface BaseRes {
  /** 訊息 */
  message: string;
  /** 狀態碼 */
  status: string;
  /** 成功 */
  success: boolean;
  /** 檢核錯誤的欄位, ex: { account: '輸入格式有誤', cellphone: '輸入格式有誤' } */
  errors?: string;
  /** 錯誤代碼 */
  errCode?: string;
  /** 錯誤訊息 */
  errMsg?: string;
}

/** API 回傳格式 單筆資料 */
interface Res<T> extends BaseRes {
  /** 資料 */
  data: T | null;
}

/** getUser API 服務 */
@Injectable({
  providedIn: 'root',
})
export class GetCardDataService {
  /** getNewInfo 資料 - 建構子 */
  constructor(
    /** Http:內部調用 Angular 內部 API HttpClient */
    private http: HttpClient
  ) {}

  /**
   * getNewInfo 資料 API
   * @returns API response
   */
  getCardData(): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/getNewInfo', {
        headers: {
          authorization: 'Bearer xxx',
        },
      })
      .pipe(map((res) => res));
  }
}
