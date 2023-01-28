import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from '@app/constants/url.constant';
import { AuthService } from '@app/core/services/api/kkbox/auth.services'
import { UserValidationService } from '@app/core/services/api/validation/user-validation.service'
import { SearchService } from '@app/core/services/api/kkbox/search.services'

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
    /** route: 內部調用 Angular 內部 API ActivatedRoute 允許訪問與某出口中載入的元件關聯路由資訊 */
    private route: ActivatedRoute,
    private authService: AuthService,
    private searchService: SearchService,

  ) { }

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
    })
  }

  /**
   * 登入
   */
  login(): void {
    this.form.markAllAsTouched()
    if (this.form.invalid) return

    this.authService.login().subscribe({
      next: (res) => {
        if (!res) return

        window.localStorage.setItem('userToken', res.access_token)
        this.router.navigate(['/index'])
      },
    })
  }

  /** 驗證失敗 */
  isInvalid(control: AbstractControl, formRef: FormGroupDirective): boolean {
    return control.invalid && (control.touched || formRef.submitted)
  }

  /** 路由轉向 */
  changeTarget(event: MouseEvent): void {
    console.log(event)
    this.router.navigate(['/index'])
  }
}

