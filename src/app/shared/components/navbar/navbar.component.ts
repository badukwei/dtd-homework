import { Component, OnInit } from '@angular/core'
import { SearchService } from '@app/core/services/api/kkbox/search.services'
import { NavbarService } from '@app/core/services/navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private searchService: SearchService, private navbarService: NavbarService) {}

  ngOnInit(): void {}

  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value
    const request = {
      q: inputValue,
      type: 'track',
      territory: 'TW',
    }
    this.searchService.search(request).subscribe({
      next: (res) => {
        this.navbarService.searchData$.next(res.tracks.data)
      },
    })
  }
}
