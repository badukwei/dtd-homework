import { AfterViewInit, Component } from '@angular/core';
import { CardType } from '@app/shared/components/card/card.component';
import { createCharts } from './chart';

/** 首頁 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit {
  /** 卡片資料 */
  data: CardType[] = [
    {
      title: 'Todays Money',
      money: '$53,000',
      rate: '+55%',
      time: 'since yesterday',
      status: 'primary',
    },
    {
      title: 'Todays Money',
      money: '$53,000',
      rate: '+55%',
      time: 'since yesterday',
      status: 'danger',
    },
    {
      title: 'Todays Money',
      money: '$53,000',
      rate: '+55%',
      time: 'since yesterday',
      status: 'success',
    },
    {
      title: 'Todays Money',
      money: '$53,000',
      rate: '+55%',
      time: 'since yesterday',
      status: 'warning',
    },
  ];

  /**
   * Angular 生命週期
   * 響應檢視變更
   */
  ngAfterViewInit() {
    let ctx1 = (document.getElementById('chart-line') as any).getContext('2d');
    createCharts(ctx1);
  }
}
