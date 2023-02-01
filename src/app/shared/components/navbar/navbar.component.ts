import { Component } from '@angular/core';
import { SearchService } from '@app/core/services/api/kkbox/search.services';
import { NavbarService } from '@app/core/services/navbar.service';
import { map, shareReplay } from 'rxjs';

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
    // cache api
    shareReplay(1),
  )
  constructor(
    /** searchService: 搜尋服務 */
    private searchService: SearchService,
    /** navbarService: 導覽列服務 */
    private navbarService: NavbarService
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
    // this.searchService.search(request).subscribe({
    //   next: (res) => {
    //     this.navbarService.searchData$.next(res.tracks.data);
    //   },
    // });
  }
}
