import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavbarModule } from '@app/shared/components/navbar/navbar.module'
import { LayoutComponent } from '@app/layout/layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NavbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule { }
