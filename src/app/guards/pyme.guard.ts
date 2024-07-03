import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const pymeGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const vendedor = localStorage.getItem('vendedor')
  const pyme = route.params['id']
  const id_pyme_usuario = localStorage.getItem('id_pyme')

  if(usuario) {

    if((vendedor == 'true') && (pyme == id_pyme_usuario)) {
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
