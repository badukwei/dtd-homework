import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardType } from '@app/model/card.model';
import { People } from '@app/model/people.model';
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
  // 開關 cardDetail
  cardState = false;
  /** 人口資料 */
  peopleData!: People[];
  //匯入卡片資料
  cardDetail = {
    title: 'Sales overview',
    money: '',
    rate: '4% more in 2021',
    time: '',
    status: '',
    link: '',
    describe: '',
  };

  /** 首頁 - 建構子 */
  constructor(private http: HttpClient) {
    console.warn('constructor: DOM 尚未載入');
    // 呼叫 API
    this.http
      .get('/api/v1/rest/datastore/301000000A-000605-067', {
        headers: {
          authorization: 'Bearer xxx',
        },
      })
      .subscribe({
        next: (res: any) => {
          this.peopleData = res.result.records;
        },
      });
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
  changeData($event: any): void {
    this.cardDetail = $event;
  }
}
