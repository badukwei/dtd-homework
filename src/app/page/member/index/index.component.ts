import { Datum, SearchResult } from './../../../core/model/kkbox/search/search.model';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardType } from '@app/core/model/card.model';
import { CategoryType } from '../../../core/model/category.model';

import { createCharts } from './chart';

import { GetCategoryService } from '@app/core/services/api/get-category.services';
import { GetCardDataService } from '@app/core/services/api/get-card-data.services';
import { NavbarService } from '@app/core/services/navbar.service';

import { BehaviorSubject, Observable, map, take } from 'rxjs';

import { OrderByPipe } from '@app/shared/pipes/order-by.pipe';
import { EmptyDataPipe } from '@app/shared/pipes/empty-data.pipe';

/** 首頁 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [OrderByPipe, EmptyDataPipe],
})
export class IndexComponent implements AfterViewInit, OnInit, OnChanges {
  /** NewInfo卡片資料 */
  newInfoData!: CardType[];
  //開關cardDetail
  cardState = false;
  /** 類別資料 */
  categoryData: CategoryType[] = [];
  /** 匯入圖表資料 */
  cardDetail = {
    title: 'Sales overview',
    money: '',
    rate: '4% more in 2021',
    time: '',
    status: '',
    link: '',
    describe: '',
  };
  /** 唱片資料 */
  books: SearchResult[] = [];
  /** NewInfo卡片資料 */
  tracksDetail = {
    name: '',
    duration: 0,
    date: '',
    artistName: '',
    url: '',
    status: '',
    describe: '',
  };
  /** 年分選擇 */
  selectYear$ = new BehaviorSubject<string>('all');
  selectYearList: any[] = [];

  /** 取得卡片資料 API 共用公式 */
  getCardDataService$ = (): Observable<any> =>
    this.getCardDataService.getCardData();
  /** 取得類別資料 API 共用公式 */
  getCategoryService$ = (): Observable<any> =>
    this.getCategoryService.getCategory();

  /** 首頁 - 建構子 */
  constructor(
    /** getCardDataService: getUser API 服務 */
    private getCardDataService: GetCardDataService,
    /** getCategoryService: getCategory API 服務 */
    private getCategoryService: GetCategoryService,
    /**  orderByPipe：資料排序處理 */
    private orderByPipe: OrderByPipe,
    /** navbarService: navbarService API 服務 */
    public navbarService: NavbarService
  ) {
    console.warn('constructor: DOM 尚未載入');
  }

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit() {
    // 呼叫 getCardData API
    this.getCardDataService$().subscribe((res) => {
      this.newInfoData = res.data;
    });
    // 呼叫 getCategory API
    this.getCategoryService$().subscribe((res) => {
      this.categoryData = res.data;
    });
    /**
     *
     */
    this.navbarService._searchData$
      .pipe(
        map((searchData2Res) => {
          const mySet = new Set();
          const years = [...this.navbarService.originalSearchData].map(
            (d: any) => new Date(d.album.release_date).getFullYear()
          );
          years.forEach((y) => {
            mySet.add(y);
          });

          /**年份不重複 */
          const uniqueYear = [...mySet].map((d) => ({ year: d }));
          /**依年份排序 */
          const sortedYear = this.orderByPipe.transform(
            uniqueYear,
            'year',
            'desc'
          );
          //更新年份 select
          this.selectYearList = ['all', ...sortedYear.map((d) => d.year)];

          /**新發售排行 */
          const no3 = [...searchData2Res];
          no3.splice(3, no3.length);
          this.books = no3.map((d: any) => ({
            name: d.name,
            duration: d.duration,
            date: d.album.release_date,
            artistName: d.album.artist.name,
            url: d.album.images[0].url,
            status: '',
            describe: '',
          })) as SearchResult[];

          //新發售排行詳細內容，預設使用第一筆
          if (this.books[0]) {
            this.tracksDetail = this.books[0];
            console.log(this.cardDetail);
          }
        })
      )
      .subscribe();
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
    let ctx1 = (document.getElementById('chart-line') as any).getContext('2d');
    createCharts(ctx1);
  }

  changeSelect($event: any) {
    const year = $event.value;
    if (year === 'all') {
      this.navbarService.updateSearch(this.navbarService.originalSearchData);
    } else {
      const filterData = [...this.navbarService.originalSearchData].filter(
        (d: any) => new Date(d.album.release_date).getFullYear() === year
      );
      this.navbarService.updateSearch(filterData);
    }
    this.selectYear$.next($event.value);
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
