import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PymesService } from '../servicios/pymes.service';
import { RolesService } from '../servicios/roles.service';

@Component({
  selector: 'app-crear-pyme',
  templateUrl: './crear-pyme.component.html',
  styleUrl: './crear-pyme.component.css'
})
export class CrearPymeComponent {

  formPyme: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionServicio: AutenticacionService,
    private pymeServicio: PymesService,
    private rolesServicio: RolesService,
    private router: Router,
    private toastr: ToastrService
  ){
    this.formPyme = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      id_vendedor: [this.autenticacionServicio.getId()]
    })
  }

  crearPyme(): void {
    if(this.formPyme.valid) {
      const pyme = this.formPyme.value
      this.rolesServicio.crearVendedor(pyme).subscribe(() => {
        localStorage.setItem('vendedor', 'true')
        this.pymeServicio.crearPyme(pyme).subscribe((data: any) => {
          this.autenticacionServicio.setPyme(data)
          this.toastr.success('Pyme creada con éxito')
          this.router.navigate(['/productos-pyme/'+ data.id_pyme])
        })
      })
    } else {
      this.formPyme.markAllAsTouched();
    }
  }
}
