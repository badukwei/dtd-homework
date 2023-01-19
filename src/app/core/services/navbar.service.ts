import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/** 導覽列服務 */
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  /** 導覽列資料 BehaviorSubject */
  searchData$ = new BehaviorSubject<any>([]);
}
