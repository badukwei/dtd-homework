import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardType } from '@app/shared/components/card/card.component';
import { createCharts } from './chart';

/** 首頁 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit, OnInit, OnChanges {
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

  /** 首頁 - 建構子 */
  constructor() {
    console.log('constructor');
  }

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit() {
    console.log('ngOnInit');
  }

  /**
   * Angular 生命週期
   * 使用變更檢測鉤子
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges' + changes);
  }

  /**
   * Angular 生命週期
   * 響應檢視變更
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    //alert('ngAfterViewInit');
    let ctx1 = (document.getElementById('chart-line') as any).getContext('2d');
    createCharts(ctx1);
  }

  /**
   * output 變更事件
   * @param $event - 變更事件
   * @returns 無回傳值
   */
  changeData($event: Event): void {
    console.log($event);
  }
}
