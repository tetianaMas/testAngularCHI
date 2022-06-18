import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TimeFormatterPipe } from './pipes/time-formatter.pipe';

@NgModule({
  declarations: [ButtonComponent, TimeFormatterPipe],
  exports: [ButtonComponent, TimeFormatterPipe],
  imports: [CommonModule],
})
export class SharedModule {}
