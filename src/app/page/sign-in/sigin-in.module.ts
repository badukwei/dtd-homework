import { SignInComponent } from '@app/page/sign-in/sign-in.component';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { ControlMessageModule } from '@app/shared/components/control-messages/control-message.module'
import { SignInRoutingModule } from './sign-in-routing.module'


/**
 * 登入頁模組
 */
@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ControlMessageModule,
    FormsModule,
  ],
})
export class SignInModule { }
