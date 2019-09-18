import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    TituloComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TituloComponent,
    ModalComponent
  ]
})
export class SharedModule { }
