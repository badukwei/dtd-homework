import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {NavbarComponent} from './navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatInputModule, MatIconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
