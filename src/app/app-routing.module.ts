import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout/layout.component';
import { SignInComponent } from '@app/page/sign-in/sign-in.component';
import { SignUpComponent } from '@app/page/sign-up/sign-up.component';
import { TableComponent } from './page/table/table.component';

/** 根路由 */
const routes: Routes = [
  // 路由轉向首頁
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  // a-route-path-default
  // 首頁
  {
    path: 'index',
    component: LayoutComponent,
    loadChildren: () =>
      import('./page/index/index.module').then((m) => m.IndexModule),
  },
  // 註冊頁
  { path: 'sign-up', component: SignUpComponent },
  // 登入頁
  { path: 'sign-in', component: SignInComponent },
  // Table
  { path: 'table', component: TableComponent },
];

/** 根路由模組 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
