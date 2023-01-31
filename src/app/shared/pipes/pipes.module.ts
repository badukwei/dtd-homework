import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyDataPipe } from './empty-data.pipe';

const pipes = [EmptyDataPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class PipesModule {}
