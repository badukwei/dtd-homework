import { CategoryType } from '../../../model/category.model';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardType } from '@app/model/card.model';
import { PeopleRes } from '@app/model/people.model';
import { GetPopulationService } from '@app/core/services/api/get-population.services';
import { GetUserService } from '@app/core/services/api/get-user.services';
import { GetCategoryService } from '@app/core/services/api/get-category.services'
import { createCharts } from './chart';

/** 首頁 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit, OnInit, OnChanges {
  /** 卡片資料 */
  data!: CardType[];
  //開關cardDetail
  cardState = false;
  /** 人口資料 */
  peopleData!: PeopleRes[];
  /** 類別資料 */
  categoryData!: CategoryType[];
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
  constructor(
    private http: HttpClient,
    /** dataService: data API 服務 */
    private getPopulationService: GetPopulationService,
    /** getUserService: getUser API 服務 */
    private getUserService: GetUserService,
    /** getCategoryService: getCategory API 服務 */
    private getCategoryService: GetCategoryService,
  ) {
    console.warn('constructor: DOM 尚未載入');
    // 呼叫 API
    this.getPopulationService.getPopulation().subscribe({
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
    // 呼叫 getUser API
    this.getUserService.getUser().subscribe((res) => {
      this.data = res.data;
    });
    this.getCategoryService.getCategory().subscribe((res) => {
      this.categoryData = res.data;
    })
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

  /**
   * output 變更事件
   * @param $event - 變更事件
   * @returns 無回傳值
   */
  changeData($event: any): void {
    this.cardDetail = $event;
  }
}
