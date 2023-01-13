import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';
import { CategoriesComponent } from './categories/categories.component';

/** 共用模組 */
@NgModule({
  declarations: [CardComponent, CategoriesComponent],
  imports: [CommonModule],
  exports: [CardComponent, CategoriesComponent],
})
export class SharedModule {}
