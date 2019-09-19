import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MigrarComponent } from './migrar/migrar.component';
import { ProgresoComponent } from './progreso/progreso.component';

@NgModule({
  declarations: [MigrarComponent, ProgresoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MigrarComponent,
    ProgresoComponent
  ]
})
export class MigracionModule { }
