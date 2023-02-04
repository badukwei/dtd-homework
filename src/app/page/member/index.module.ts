import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IndexRoutingModule } from '@app/page/member/index-routing.module';
import { IndexComponent } from '@app/page/member/index/index.component';
import { TableComponent } from '@app/page/member/table/table.component';
import { SharedModule } from '@app/shared/components/shared.module';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

/** 首頁模組 */
@NgModule({
  declarations: [IndexComponent, TableComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    HttpClientModule,
    PipesModule,
    DirectivesModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
  ],
})
export class IndexModule {}
