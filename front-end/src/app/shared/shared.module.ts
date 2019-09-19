import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    TituloComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TituloComponent,
    ModalComponent
  ]
})
export class SharedModule { }
