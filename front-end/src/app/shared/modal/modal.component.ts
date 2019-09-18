import { Component, OnInit, Input } from '@angular/core';
declare var jQuery: any;
declare var $: any;

const classError = 'modal-header btn-danger';
const classInfo = 'modal-header btn-info';
const classOK = 'modal-header btn-success';
const classIconError = 'fa fa-exclamation-circle';
const cassIconInfo = 'fa fa-info-circle';
const classIconOK = 'fa fa-question-circle';

export enum tiposModal {
  OK = 1,
  INFO = 2,
  ERROR = 3
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  mensaje: string;
  errores: string[];
  titulo: string;
  tipoModal: string;
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  showModal(mensaje: string, errores: string[], tipoModal: tiposModal): void {
    switch (tipoModal) {
      case tiposModal.ERROR:
        this.titulo = 'Error';
        this.tipoModal = classError;
        this.icon = classIconError;
        break;
      case tiposModal.OK:
        this.titulo = 'Mensaje';
        this.tipoModal = classOK;
        this.icon = classIconOK;
        break;
      case tiposModal.INFO:
        this.titulo = 'Info';
        this.tipoModal = classInfo;
        this.icon = cassIconInfo;
        break;
      default:
        break;
    }

    this.mensaje = mensaje;
    this.errores = errores;

    $("#Modal").modal({ backdrop: 'static', keyboard: false });
    $("#Modal").modal("show");
  }

}
