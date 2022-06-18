import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, ModalComponent],
  exports: [HeaderComponent, ModalComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class CoreModule {}
