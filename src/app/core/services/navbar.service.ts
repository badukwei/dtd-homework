import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { SearchService } from './api/kkbox/search.services';

/** 導覽列服務 */
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  // kkbox search api 共用公式 Observable
  search$ = (request: any) =>
    this.searchService.search(request).pipe(
      tap(x => console.log(x)),
      map((res) => res.tracks.data),
      map((data) => {
        // 依日期新到舊排序
        const sortedOriginData = [...data].sort(
          (a, z) =>
            new Date(z.album.release_date).getTime() -
            new Date(a.album.release_date).getTime()
        );
        //備份原始資料
        this.originalSearchData = sortedOriginData;
        return sortedOriginData;
      }),
      tap((d) => {
        this.updateSearch(d);
      }),
      // cache api
      shareReplay(1)
    );

  _searchData$ = new BehaviorSubject<any>([]);
  searchData$ = this._searchData$.asObservable();
  originalSearchData: any[] = [];

  constructor(private searchService: SearchService) {}

  /**
   * 搜尋資料回傳
   * @param data kkbox search ordered result
   * @returns 前十五個最新專輯資料，按照時間順序
   */
  updateSearch(data: any) {
    this._searchData$.next(data);
    console.log(data)
  }
}
