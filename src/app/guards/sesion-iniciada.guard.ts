import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const sesionIniciadaGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const pyme = localStorage.getItem('id_pyme')

  if(usuario) {
    if(pyme) {
      toastr.error('Ya tiene una pyme creada')
      router.navigate(['/productos-pyme/' + pyme])
      return false
    } else {
      return true
    }
  } else {
    toastr.error('Debes iniciar sesión')
    router.navigate(['/inicioSesion'])
    return false
  }
}
