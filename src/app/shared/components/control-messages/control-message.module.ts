import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlMessagesComponent } from './control-messages.component';

/** 錯誤訊息 模組 */
@NgModule({
  declarations: [ControlMessagesComponent],
  imports: [CommonModule],
  exports: [ControlMessagesComponent],
})
export class ControlMessageModule {}
