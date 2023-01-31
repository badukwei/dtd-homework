import { Pipe, PipeTransform } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import isNumber from 'lodash-es/isNumber';

/**
 * 空值處理器
 * @example
 * ```html
 * <div>{{ 2000 | emptyData }}</div>
 * ```
 */
@Pipe({
  name: 'emptyData',
})
export class EmptyDataPipe implements PipeTransform {
  /**
   * 轉換操作器-空值處理器轉換
   * @param value - ''
   * @returns '-'
   */
  transform(value: string | number | null | undefined, isPrice = true): any {
    if (isNumber(value)) {
      if (value === 0 && isPrice) {
        return '0.00';
      } else {
        return value;
      }
    }
    if (isEmpty(value)) {
      return '-';
    } else {
      return value;
    }
  }
}
