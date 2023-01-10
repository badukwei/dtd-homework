import { AfterViewInit, Component } from '@angular/core';
import { createCharts } from './chart';

/** 首頁 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit {
  /**
   * Angular 生命週期
   * 響應檢視變更
   */
  ngAfterViewInit() {
    let ctx1 = (document.getElementById('chart-line') as any).getContext('2d');
    createCharts(ctx1);
  }
}
