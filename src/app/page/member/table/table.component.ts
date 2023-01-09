import { Component } from '@angular/core';

/** 表格頁 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  /** 頁面標題 */
  title = 'Authors table';
  /** 是否顯示 */
  isShow = false;
  /**資料 */
  data: any = [
    {
      author: 'John Michael',
      authorUrl: '../assets/img/team-2.jpg',
      email: 'john@creative-tim.com',
      function: {
        role: 'Manager',
        place: 'Organization',
      },
      status: 'Online',
      employed: '2023-04-18',
    },
    {
      author: 'John Michael',
      authorUrl: '../assets/img/team-2.jpg',
      email: 'john@creative-tim.com',
      function: {
        role: 'Manager',
        place: 'Organization',
      },
      status: 'Offline',
      employed: '2023-04-18',
    },
  ];

  /**
   * 變更標題
   */
  changeTitle(): void {
    this.title = 'ABC';
  }
}
