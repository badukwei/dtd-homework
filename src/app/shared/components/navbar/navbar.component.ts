import { Component } from '@angular/core';
import { SearchService } from '@app/core/services/api/kkbox/search.services';
import { NavbarService } from '@app/core/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    /** searchService: 搜尋服務 */
    private searchService: SearchService,
    /** navbarService: 導覽列服務 */
    private navbarService: NavbarService
  ) {}

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
    this.searchService.search(request).subscribe({
      next: (res) => {
        this.navbarService.searchData$.next(res.tracks.data);
      },
    });
  }
}
