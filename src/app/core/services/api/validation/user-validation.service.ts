import { Injectable } from '@angular/core'
import { AbstractControl, ValidationErrors } from '@angular/forms'
import { ErrorMessage } from './common-validation.service'

/**
 * 自定義驗證器 mapping 錯誤訊息
 */
export const userErrorMessages: ErrorMessage = (validatorName, validatorValue?) => {
  return {
    //帳號
    accountRequire: '請輸入帳號',
    accountApiError: validatorValue,
    //email
    emailRequire: '請輸入公司信箱',
    emailInvalid: '請輸入正確的公司信箱',
    emailApiError: validatorValue,
    //驗證碼
    captchaRequire: '請輸入驗證碼',
    captchaInvalid: '請輸入正確的驗證碼',
    captchaApiError: validatorValue,
    //密碼
    passwordRequire: '請輸入密碼',
    passwordInvalid: '請輸入正確的密碼',
    passwordApiError: validatorValue,
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserValidationService {
  /** 帳號驗證器 */
  static accountValidator(control: AbstractControl): ValidationErrors | null {
    // 帳號未填寫
    if (!control.value) {
      return { accountRequire: true }
    }
    return null
  }
  /** 電子信箱驗證器 */
  static emailValidator(control: AbstractControl): ValidationErrors | null {
    /** 電子信箱正則式規則 */
    const regex = new RegExp('@{1,1}')

    // 電子信箱未填寫
    if (!control.value) {
      return { emailRequire: true }
    }
    // 電子信箱未包含一個 @ 符號
    if (control.value.match(regex) === null) {
      return { emailInvalid: true }
    }
    return null
  }

  /** 密碼驗證器 */
  static passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { passwordRequire: true }
    }

    return null
  }
}
