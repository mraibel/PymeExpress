import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const iniciadoGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')

  if(usuario) {
    toastr.info('Ya hay una sesión iniciada')
    router.navigate([''])
    return false
  } else {
    return true
  }
}
