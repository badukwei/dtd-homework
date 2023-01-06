import { Component } from '@angular/core';

/**
 * 註冊頁元件
 */
@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  /**
   * TODO:
   * 把 表單加上驗證，使用 Template-driven forms
   * 驗證 First name 和 last name 欄位必填
   * 若沒輸入，點選送出按鈕，欄位下方出現錯誤訊息「xx 欄位必填」或「請輸入 xx 欄位」
   */

  /**
   * 送出表單
   * @param $event - 事件
   * @returns 無回傳值
   */
  onSubmit($event: Event): void {
    $event.preventDefault();
  }
}
