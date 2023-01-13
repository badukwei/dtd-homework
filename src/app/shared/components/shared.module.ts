import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';
import { CategoryComponent } from './categories/category.component';

/** 共用模組 */
@NgModule({
  declarations: [CardComponent, CategoryComponent],
  imports: [CommonModule],
  exports: [CardComponent, CategoryComponent],
})
export class SharedModule {}
