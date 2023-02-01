import isNumber from 'lodash-es/isNumber';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * 欄位位數
 */

export enum PriceDigit {
  /**單位數 欄位位數 */
  transactionUnits = 6,
  /**投資標的價格(淨值) 欄位位數 */
  investmentTargetPrice = 4,
  /**投資標的匯率 欄位位數 */
  investmentTargetExchangeRate = 4,
  /**參考報酬率 欄位位數*/
  referenceReturnRate = 4,
  /**參考含息報酬率 欄位位數*/
  referenceReturnRateIncludeInterest = 4,
  /**其他金額項目 欄位位數*/
  otherType = 2,
}

/**
 * 金額格式轉換
 * @example
 * ```
 * <div>{{ 12345 | price  }}</div>
 * ```
 */
@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  /**
   * 轉換操作器-金額格式轉換
   * @param value - 金額 ex 1000
   * @param decimal - 小數位數 ex 2
   * @returns 千分位 ex 1,000.00
   */
  transform(value: number | null | undefined, decimal = PriceDigit.otherType): string {
    if (!value) {
      let displayValue = '0'
      displayValue += '0'.repeat(decimal)
      return displayValue;
    }
    if (isNumber(value)) {
      /** 呈現小數n位數 */
      const amount = value.toFixed(decimal);
      /** 千分位正則式規則 */
      const regex = new RegExp('(\\d{1,3})(?=(\\d{3})+(.?:$|\\D))', 'g');
      /** 轉換成千分位格式 */
      const tenPercentile = amount.replace(regex, '$1,');

      return tenPercentile
    } else {
      return value
    }
  }

}
