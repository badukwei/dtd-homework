import { SignInModule } from './page/sign-in/sigin-in.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LayoutComponent } from '@app/layout/layout.component';
import { SignUpComponent } from '@app/page/sign-up/sign-up.component';
import { ApiInterceptor } from './core/services/api.interceptor';

/**
 * 根模組
 */
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SignInModule,
  ],
  providers: [ApiInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
