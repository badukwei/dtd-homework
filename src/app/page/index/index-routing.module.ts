import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

/** 首頁 路由 */
const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: IndexComponent }],
  },
];

/** 首頁路由模組 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
