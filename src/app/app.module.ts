import { SignInModule } from './page/sign-in/sigin-in.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from '@app/app.component';
import { SignUpComponent } from '@app/page/sign-up/sign-up.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { ApiInterceptor } from './core/services/api.interceptor';
import { PipesModule } from './shared/pipes/pipes.module';

/**
 * 根模組
 */
@NgModule({
  declarations: [AppComponent, SignUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SignInModule,
    LayoutModule,
    PipesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
