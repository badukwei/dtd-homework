import { Component } from '@angular/core';

/**
 * 註冊頁元件
 */
@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form = {
    firstName: '',
    lastName: '',
    password: '',
  };

  /**
   * 送出表單
   * @returns 無回傳值
   */
  onSubmit(): void {
    console.log(this.form)
    alert('SUCCESS')
  }
}
