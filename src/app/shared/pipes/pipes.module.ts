import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyDataPipe } from './empty-data.pipe';
import { OrderByPipe } from './order-by.pipe';
import { PricePipe } from './price.pipe';

const pipes = [EmptyDataPipe, OrderByPipe, PricePipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class PipesModule {}
