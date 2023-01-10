import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@app/shared/components/card/card.component';

/** 共用模組 */
@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class SharedModule {}
