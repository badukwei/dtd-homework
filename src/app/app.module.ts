
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';

/**
 * 根模組
 */
@NgModule({
  declarations: [AppComponent, LayoutComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
