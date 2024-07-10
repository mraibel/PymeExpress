import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const esVendedorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const repartidor = localStorage.getItem('repartidor')
  const id = localStorage.getItem('id_usuario')

 

  if(usuario) {
    if(repartidor == "true") {
      toastr.error('Ya eres repartidor')
      router.navigate(['/repartos/' + id])
      return false
    } else {
      return true
    }
  } else {
    toastr.error('Debes iniciar sesión')
    router.navigate(['/inicioSesion'])
    return false
  }
};
