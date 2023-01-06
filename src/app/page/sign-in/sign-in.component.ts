import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { url } from '@app/constants/url.constant';

/** 登入頁 */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  /** URL 常數 */
  url = url;

  /** 登入頁 - 建構子 */
  constructor() {}

  /**
   * 網址跳轉
   * @param link - 網址
   * @returns 無回傳值
   */
  onSubmit($event: Event): void {
    console.log("login")
  }

  goLink(link: string): void {
    // 進行外部導轉
    window.open(link);
  }
}
