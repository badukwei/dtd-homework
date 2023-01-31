import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

const directives = [HighlightDirective];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives],
})
export class DirectivesModule {}
