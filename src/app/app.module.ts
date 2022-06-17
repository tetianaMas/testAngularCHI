import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LoansModule } from './loans/loans.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, LoansModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
