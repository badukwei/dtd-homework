import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { IndexRoutingModule } from '@app/page/member/index-routing.module';
import { IndexComponent } from '@app/page/member/index/index.component';
import { TableComponent } from '@app/page/member/table/table.component';
import { SharedModule } from '@app/shared/components/shared.module';

/** 首頁模組 */
@NgModule({
  declarations: [IndexComponent, TableComponent],
  imports: [CommonModule, IndexRoutingModule, SharedModule, HttpClientModule],
})
export class IndexModule {}
