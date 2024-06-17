import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const vendedorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const rol2 = localStorage.getItem('rolesUsuario')

  if(usuario != undefined && rol2?.localeCompare('vendedor')){
    return true
  } else {
    if(usuario != undefined && rol2 == null) {
      toastr.error('No puedes acceder a esta página, no tienes el rol correspondiente')
      router.navigate([''])
      return false
    } else {
      toastr.error('No puedes acceder a esta página, debes iniciar sesión')
      router.navigate(['/inicioSesion'])
      return false
    }
 
  }

}
