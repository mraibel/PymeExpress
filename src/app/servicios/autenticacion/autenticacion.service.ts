import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/autenticacion/iniciar`, user)
            .pipe(map((data) =>{
              if(data) {
                this.setToken(data.token)
                this.setUsuario(data.usuario, data.usuario.roles, data.usuario.id_usuario)
              }
            }))
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/autenticacion/registrar`, user)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  setUsuario(usuario: any, roles: any, id: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('idUsuario', JSON.stringify(id))
    if(roles[1]){
      localStorage.setItem('rol2', JSON.stringify(roles[1].tipo))
    }
    if(roles[2]) {
      localStorage.setItem('rol3', JSON.stringify(roles[2].tipo))
    }
    
  }

  getUsuario(): any {
    return localStorage.getItem('usuario')
  }

  cerrarSesion(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    localStorage.removeItem('rol2')
    localStorage.removeItem('rol3')
    localStorage.removeItem('idUsuario')
    this.toastr.success('Sesion cerrada')
    this.router.navigate([''])
  }

}
