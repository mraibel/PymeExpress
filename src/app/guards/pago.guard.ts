import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const pagoGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')

  if(!usuario) {
    toastr.error('Debe iniciar sesión para proceder al pago')
    router.navigate(['/inicioSesion'])
    return false
  } else {
    return true
  }
}
