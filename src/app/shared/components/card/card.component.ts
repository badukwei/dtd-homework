import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType } from '@app/core/model/card.model';

/** 卡片元件 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  /** 匯入資料 */
  @Input() data: CardType = {
    title: '',
    money: '',
    rate: '',
    time: '',
    status: '',
    link: '',
    describe: '',
  };
  /** 資料變更事件 */
  @Output() changeData = new EventEmitter<any>();

  /**
   * 處理狀態（複雜版）
   * @param status - 狀態
   * @returns - 狀態 class
   */
  handleStatus(status: string): string {
    const statusList: Record<string, Record<string, string>> = {
      primary: { color: 'primary', status: 'primary' },
      danger: {
        color: 'danger',
        status: 'danger',
      },
      success: {
        color: 'success',
        status: 'success',
      },
      warning: {
        color: 'warning',
        status: 'warning',
      },
    };
    // 當狀態類型符合樣式
    if (statusList[status]['status'] === status) {
      return `bg-gradient-${statusList[status]['color']} shadow-${statusList[status]['color']}`;
    }
    return '';
  }

  /**
   * 處理狀態（簡單版）
   * @param status - 狀態
   * @returns - 狀態 class
   */
  getStatus(status: string) {
    return {
      'bg-gradient-primary': status === 'primary',
      'bg-gradient-danger': status === 'danger',
      'bg-gradient-success': status === 'success',
      'bg-gradient-warning': status === 'warning',
    };
  }

  /**
   * 點擊更新資料
   */
  submit(): void {
    this.changeData.emit(this.data);
  }
}
