import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

/** 首頁模組 */
@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
