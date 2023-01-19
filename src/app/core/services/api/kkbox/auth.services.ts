import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthReq, GuestTokenRes } from '@app/core/model/auth.mode';
import * as qs from 'qs';
import { Observable } from 'rxjs';

/** 會員驗證服務 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** 會員驗證服務 - 建構子 */
  constructor(
    /** Http:內部調用 Angular 內部 API HttpClient */
    private http: HttpClient
  ) {}

  /**
   * 登入
   * @returns 會員驗證服務 response
   */
  login(request: AuthReq): Observable<GuestTokenRes> {
    const option = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    return this.http.post<GuestTokenRes>(
      '/oauth2/token',
      qs.stringify(request),
      option
    );
  }
}
