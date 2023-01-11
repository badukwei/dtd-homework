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
      link: 'https://angular.tw/guide/setup-local',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: 'Todays Sales',
      money: '$53,000',
      rate: '+35%',
      time: 'since Monday',
      status: 'danger',
      link: 'https://tpi.gitbook.io/f2e-learning/homework/zuo-ye-jiao-jiao-ou',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: 'Todays Fund',
      money: '$53,000',
      rate: '+25%',
      time: 'since Saturday',
      status: 'success',
      link: 'https://docs.github.com/en/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
    {
      title: 'Todays Coin',
      money: '$3,000',
      rate: '+15%',
      time: 'since Sunday',
      status: 'warning',
      link: 'https://docs.github.com/en/pull-requests',
      describe:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id quisquam perferendis enim odit saepe, corrupti repellat voluptates fugiat sapiente sequi sunt nihil iure molestias reiciendis soluta dolore similique voluptatum totam iste fuga doloribus! Cumque tempora, quas id repellendus aut atque vel quod eligendi exercitationem voluptates nesciunt qui iste minus praesentium recusandae ipsam odit soluta expedita, magni, aliquam et veniam?',
    },
  ];

  //開關cardDetail
  cardState = false;

  //匯入卡片資料
  cardDetail = {
    title: '',
    money: '',
    rate: '',
    time: '',
    status: '',
    link: '',
    describe: '',
  }

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
   * @returns cradState, 無
   */
  changeData($event: any): void {
    this.cardState = !this.cardState
    this.cardDetail = $event
  }
}
