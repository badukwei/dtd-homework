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
  //Author
  authorData: any = [
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

  //Project
  projectData: any = [
    {
      project: 'Spotify',
      projectUrl: '../assets/img/small-logos/logo-spotify.svg',
      budget: 2500,
      status: 'working',
      completion: 60,
    },
    {
      project: 'Invision',
      projectUrl: '../assets/img/small-logos/logo-invision.svg',
      budget: 5000,
      status: 'done',
      completion: 100,
    },
    {
      project: 'Jira',
      projectUrl: '../assets/img/small-logos/logo-jira.svg',
      budget: 3400,
      status: 'canceled',
      completion: 30,
    },
    {
      project: 'Slack',
      projectUrl: '../assets/img/small-logos/logo-slack.svg',
      budget: 1000,
      status: 'canceled',
      completion: 0,
    },
    {
      project: 'Webdev',
      projectUrl: '../assets/img/small-logos/logo-webdev.svg',
      budget: null,
      status: 'working',
      completion: 80,
    },
    {
      project: 'Adobe XD',
      projectUrl: '../assets/img/small-logos/logo-xd.svg',
      budget: 2300,
      status: 'done',
      completion: 100,
    },
  ];

  /**
   * 變更標題
   * @returns 無回傳值
   */
  changeTitle(): void {
    this.title = 'ABC';
  }

  /**
   * 印出該行表單資料
   * @param i - 表單資料索引
   * @returns 無回傳值
   */
  printData(i: number): void {
    console.log(this.projectData[i]);
  }
}
