import { Component } from '@angular/core';
import { SearchService } from '@app/core/services/api/kkbox/search.services';
import { NavbarService } from '@app/core/services/navbar.service';
import { OrderByPipe } from '@app/shared/pipes/order-by.pipe';
import { of } from 'rxjs'
import { map, shareReplay, tap } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  //search 共用公式 Observable
  search$ = (request: any) =>
  this.searchService.search(request).pipe(
    map((res) => res.tracks.data),
    // 可以放 side effect 的地方
    tap(data => {
      // 日期排序，ES6 JS-淺拷貝(Shallow Copy) VS 深拷貝(Deep Copy)
      const abc = [...data].sort(
        (a, z) =>
        new Date(z.album.release_date).getTime() -
        new Date(a.album.release_date).getTime()
      )
      abc.splice(3, abc.length)
      console.log(abc)
      this.navbarService.searchData3$ = of(abc)
    }),
    // cache api
    shareReplay(1),
  )
  constructor(
    /** searchService: 搜尋服務 */
    private searchService: SearchService,
    /** navbarService: 導覽列服務 */
    private navbarService: NavbarService,
    /** navbarService: 排列 pipe */
    private orderByPipe: OrderByPipe,
  ) {}

  ngOninit() {
    const request = {
      q: 'Taylor Swift',
      type: 'track',
      territory: 'TW',
    }

    this.navbarService.searchData2$ = this.search$(request)
  }

  /**
   * 變更偵測 input 框事件
   * @param $event - 事件
   */
  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value;
    const request = {
      q: inputValue,
      type: 'track',
      territory: 'TW',
    };
    this.navbarService.searchData2$ = this.search$(request)
  }
}
