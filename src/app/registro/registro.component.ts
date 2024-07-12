import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  formUser: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionServicio: AutenticacionService,
    private toastr: ToastrService,
    private router: Router
  ){
    this.formUser = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    }, { validators: this.validar });
  }

  validar(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')
    const confirmarPassword = control.get('confirmarPassword')
    return password && confirmarPassword && password.value !== confirmarPassword.value ? { password: true } : null;
  }

  registarUsuario() {
    if(this.formUser.valid) {
      const usuario = this.formUser.value
      console.log(usuario)
      this.autenticacionServicio.register(usuario).subscribe(() => {
        this.router.navigate(['/inicioSesion'])
        alert('Revisa tu correo para confirmar tu cuenta')
      }, e => {
        alert('Ocurrió un problema durante el registro')
      })
    } else {
      this.formUser.markAllAsTouched();
    }
  }
}


