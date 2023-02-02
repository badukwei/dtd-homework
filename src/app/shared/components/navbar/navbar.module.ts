import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar.component';
import { OrderByPipe } from '@app/shared/pipes/order-by.pipe';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatInputModule, MatIconModule],
  exports: [NavbarComponent],
  providers: [OrderByPipe],
})
export class NavbarModule {}
