import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';
import { CategoryComponent } from './categories/category.component';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

/** 共用模組 */
@NgModule({
  declarations: [CardComponent, CategoryComponent],
  imports: [CommonModule, PipesModule, DirectivesModule],
  exports: [CardComponent, CategoryComponent],
})
export class SharedModule {}
