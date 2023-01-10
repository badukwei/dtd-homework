import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { url } from '@app/constants/url.constant';

/** 登入頁 */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  /** URL 常數 */
  url = url;
  /** 表單 */
  form!: FormGroup;

  /** 登入頁 - 建構子 */
  constructor(private fb: FormBuilder) {}

  /** 取得 user formArray */
  get user(): FormArray {
    return this.form.get('user') as FormArray;
  }

  /** 設定 user formControl */
  userDataControl(index: number, formControlName: string): FormControl {
    return this.user.at(index).get(formControlName) as FormControl;
  }

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * 建立初始表單
   * @returns 無回傳值
   */
  initForm(): void {
    this.form = this.fb.group(
      {
        //email
        email: this.fb.control('', { validators: [Validators.required] }),
        //password
        password: this.fb.control('', {
          validators: [Validators.required, Validators.maxLength(20)],
        }),
        //使用者
        user: this.fb.array([this.newUser('', '')]),
      },
      {
        // 偵測變更
        updateOn: 'submit',
      }
    );
  }

  /**
   * 動態新增一組使用者
   * @param firstName
   * @param lastName
   * @returns
   */
  newUser(firstName: string, lastName: string): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(firstName),
      lastName: this.fb.control(lastName),
    });
  }

  /**
   * 新增使用者
   * @returns 無回傳值
   */
  addNewUser(): void {
    (this.form.get('user') as FormArray).push(this.newUser('', ''));
  }

  /**
   * 登入
   * @returns 無回傳值
   */
  onSubmit(): void {
    // 若表單驗證失敗，則不繼續執行
    if (this.form.invalid) return;
    setTimeout(() => {
      this.form.patchValue(this.form.value);
    }, 1000);

    console.log(this.form.value);
  }

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
