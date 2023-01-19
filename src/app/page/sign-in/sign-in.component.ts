import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Router } from '@angular/router';
import { url } from '@app/core/constants/url.constant';
import { AuthService } from '@app/core/services/api/kkbox/auth.services';
import { UserValidationService } from '@app/core/services/api/validation/user-validation.service';

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
  constructor(
    /** fb:表單服務 */
    private fb: FormBuilder,
    /** router: 內部調用 Angular 內部 API 路由與導航 */
    private router: Router,
    /** authService: 會員驗證服務  */
    private authService: AuthService
  ) {}

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      //email
      email: this.fb.control('', {
        validators: [UserValidationService.emailValidator],
        updateOn: 'submit',
      }),
      password: this.fb.control('', {}),
      isRemember: this.fb.control(false, {}),
    });
  }

  /**
   * 登入
   * @returns 無回傳值
   */
  login(): void {
    this.form.markAllAsTouched();
    // 若表單驗證失敗，則不執行後續程式
    if (this.form.invalid) return;

    const loginRequest = {
      grant_type: 'client_credentials',
      client_id: '45ac7f2bc0e94de81f6cbccc24ad791c',
      client_secret: '37cff4bb0cae438536bf581f67a745bc',
    };

    // TODO: 改成使用共用公式
    this.authService.login(loginRequest).subscribe({
      next: (res) => {
        if (!res) return;

        window.localStorage.setItem('userToken', res.access_token);
        this.router.navigate(['/index']);
      },
    });
  }

  /**
   * 是否驗證失敗
   * @param control - 表單控制元件
   * @param formRef - 表單
   * @returns 是否驗證失敗
   */
  isInvalid(control: AbstractControl, formRef: FormGroupDirective): boolean {
    return control.invalid && (control.touched || formRef.submitted);
  }

  /**
   * 路由轉向
   * @param event - 事件
   * @returns 無回傳值
   */
  changeTarget(event: MouseEvent): void {
    console.log(event);
    this.router.navigate(['/index']);
  }
}
