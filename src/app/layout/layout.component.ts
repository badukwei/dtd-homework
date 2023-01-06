import { Component } from '@angular/core';
import { url } from '@app/constants/url.constant';

/** layout 模板 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  /** URL 常數 */
  url = url;

  /** layout 模板 - 建構子 */
  constructor() {}

  /**
   * 網址跳轉
   * @param link - 網址
   * @returns 無回傳值
   */
  goLink(link: string): void {
    // 進行外部導轉
    window.open(link);
  }
}
