import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignUpComponent } from './page/sign-up/sign-up.componet';
import { SignInComponent } from './page/sign-in/sign-in.component';

const routes: Routes = [
  //a-route-path-default
{ path: '',
  component: LayoutComponent,
  loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)
},

{ path: 'signup', component: SignUpComponent },
{ path: 'signin', component: SignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
