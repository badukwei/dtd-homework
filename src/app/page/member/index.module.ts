import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexRoutingModule } from '@app/page/member/index-routing.module';
import { IndexComponent } from '@app/page/member/index/index.component';
import { TableComponent } from '@app/page/member/table/table.component';

/** 首頁模組 */
@NgModule({
  declarations: [IndexComponent, TableComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
