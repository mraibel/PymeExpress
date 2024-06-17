import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const vendedorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const rol2 = localStorage.getItem('rol2')
  const rol3 =localStorage.getItem('rol3')

  if(usuario) {
    if(rol2?.localeCompare('vendedor') || rol3?.localeCompare('vendedor')) {
      return true
    } else {
      toastr.error('No puedes acceder a esta página, no tienes los permisos')
      router.navigate([''])
      return false
    }
  } else {
    toastr.error('No puedes acceder a esta página, debes iniciar sesión')
    router.navigate(['/inicioSesion'])
    return false
  }

}
