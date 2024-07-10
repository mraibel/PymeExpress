import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolesService } from '../servicios/roles.service';
import { RepartidorService } from '../servicios/repartidor.service';

@Component({
  selector: 'app-crear-repartidor',
  templateUrl: './crear-repartidor.component.html',
  styleUrl: './crear-repartidor.component.css'
})

export class CrearRepartidorComponent {

  formRepartidor: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionServicio: AutenticacionService,
    private repartidorServcio: RepartidorService,
    private rolesServicio: RolesService,
    private router: Router,
    private toastr: ToastrService
  ){
    this.formRepartidor = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      rut: ['', [Validators.required, this.validarRut]],
      id_repartidor: [this.autenticacionServicio.getId()]
    })
  }

  crearRepartidor(): void {
    if(this.formRepartidor.valid) {
      const repartidor = this.formRepartidor.value
      this.rolesServicio.crearRepartidor(repartidor).subscribe(() => {
        localStorage.setItem('repartidor', 'true')
        this.toastr.success('Felicidades, ahora eres Repartidor')
        this.router.navigate(['/repartos/'+ this.autenticacionServicio.getId()])
      })
    } else {
      this.formRepartidor.markAllAsTouched();
    }
  }

  // Validador personalizado para RUT chileno
  validarRut(control: any) {
    const rut = control.value;
    // Implementa aquí la lógica de validación del RUT chileno
    // Este es un ejemplo básico, deberías implementar la validación completa
    if (!/^[0-9]{7,8}-[0-9Kk]{1}$/.test(rut)) {
      return { rutInvalido: true };
    }
    return null;
  }
}