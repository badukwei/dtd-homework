import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignUpComponent } from './page/sign-up/signup.componet';

const routes: Routes = [
  //a-route-path-default
{ path: '',
  component: LayoutComponent,
  loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)
},

{ path: 'signup', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
