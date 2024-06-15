import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const repartidorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const rol2 = localStorage.getItem('rolesUsuario')

  if(usuario && rol2 == 'repartidor'){
    return true
  } else {
    toastr.error('No puedes acceder a esta página, debes iniciar sesión')
    router.navigate(['/registro'])
    return false 
  }

}
