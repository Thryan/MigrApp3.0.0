import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services/login.service';
import { ModalComponent, tiposModal } from '../shared/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;

  /* Modal */
  @ViewChild('Modal', null) Modal: ModalComponent;

  constructor(
    public router: Router,
    protected LoginService: LoginService
  ) { }

  ngOnInit() {
    var logueado = this.LoginService.logIn;
    if(logueado) {
      this.router.navigateByUrl('');
    }
  }

  loguearse() {
    this.LoginService.iniciarSesion(this.usuario, this.password).subscribe(
      (data) => {
        if (data['token']) {
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigateByUrl('');
        } else {
          this.Modal.showModal(data['errorMessage'], [], tiposModal.INFO);
        }
      },
      (error) => {
        console.log(error);
        this.Modal.showModal(error['error']['errorMessage'], [], tiposModal.ERROR);
      }
    );

  }
}
