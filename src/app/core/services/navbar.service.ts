import { Datum } from './../model/kkbox/search/search.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/** 導覽列服務 */
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  /** 導覽列資料 BehaviorSubject */
  searchData$ = new BehaviorSubject<Datum[]>([]);
  searchData2$: Observable<any> = new Observable()
}
