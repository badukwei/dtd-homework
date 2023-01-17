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

//   /** 取得 user formArray */
//   get user(): FormArray {
//       return this.form.get('user') as FormArray;
//     }

//     /** 設定 user formControl */
//     userDataControl(index: number, formControlName: string): FormControl {
//       return this.user.at(index).get(formControlName) as FormControl;
//     }

//     /**
//      * Angular 生命週期
//      * 初始化元件或指令
//      */
//     ngOnInit(): void {
//       this.initForm();
//     }

//     /**
//      * 建立初始表單
//      * @returns 無回傳值
//      */
//     initForm(): void {
//       this.form = this.fb.group(
//         {
//           //email
//           email: this.fb.control('', { validators: [Validators.required] }),
//           //password
//           password: this.fb.control('', {
//             validators: [Validators.required, Validators.maxLength(20)],
//           }),
//           //使用者
//           user: this.fb.array([this.newUser('', '')]),
//         },
//         {
//           // 偵測變更
//           updateOn: 'submit',
//         }
//       );
//     }

//     /**
//      * 動態新增一組使用者
//      * @param firstName
//      * @param lastName
//      * @returns
//      */
//     newUser(firstName: string, lastName: string): FormGroup {
//       return this.fb.group({
//         firstName: this.fb.control(firstName),
//         lastName: this.fb.control(lastName),
//       });
//     }

//     /**
//      * 新增使用者
//      * @returns 無回傳值
//      */
//     addNewUser(): void {
//     (this.form.get('user') as FormArray).push(this.newUser('', ''));
//   }

//   /**
//    * 登入
//    * @returns 無回傳值
//    */
//   onSubmit(): void {
//     // 若表單驗證失敗，則不繼續執行
//     if (this.form.invalid) return;
//     setTimeout(() => {
//       this.form.patchValue(this.form.value);
//     }, 1000);

//     console.log(this.form.value);
//   }

//   /**
//    * 網址跳轉
//    * @param link - 網址
//    * @returns 無回傳值
//    */
//   goLink(link: string): void {
//     // 進行外部導轉
//     window.open(link);
//   }
// }
