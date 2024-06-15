import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

  formUser: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionServicio: AutenticacionService,
    private router: Router,
    private toastr: ToastrService
  ){
    this.formUser = this.formBuilder.group({
      correo: ['mraibel12@gmail.com', [Validators.required, Validators.email]],
      password: ['admin123', [Validators.required]],
    })
  }

  iniciarSesion(){
    if(this.formUser.valid) {
      const usuario = this.formUser.value
      this.autenticacionServicio.login(usuario).subscribe(() => {
        this.toastr.success('Inicio con exito!')
        this.router.navigate([''])
      })
    } else {
      this.formUser.markAllAsTouched();
    }
  }
}
