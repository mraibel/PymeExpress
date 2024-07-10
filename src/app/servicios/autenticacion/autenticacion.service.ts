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
                this.setDatos(data)
              }
            }))
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/autenticacion/registrar`, user)
  }

  setDatos(data: any): void {
    this.setToken(data.token)
    this.setUsuario(data.usuario)
    this.setId(data.id)
    this.setRoles(data.roles)
    if(data.pyme) {
      this.setPyme(data.pyme)
    }
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  estaAutenticado(): boolean {
    return this.getToken() !== null;
  }



  setUsuario(usuario: any): void {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  setId(id: any): void {
    localStorage.setItem('id_usuario', JSON.stringify(id))
  }

  getId(): any {
    return localStorage.getItem('id_usuario')
  }

  setRoles(roles: any): void {
    if(roles.includes('vendedor')){
      localStorage.setItem('vendedor', 'true')
    } else {
      localStorage.setItem('vendedor', 'false')
    }
    if(roles.includes('repartidor')){
      localStorage.setItem('repartidor', 'true')
    } else {
      localStorage.setItem('repartidor', 'false')
    }
  }

  getVendedor(): any {
    return localStorage.getItem('vendedor')
  }

  getRepartidor(): any {
    return localStorage.getItem('repartidor')
  }

  setPyme(pyme: any) {
    localStorage.setItem('id_pyme', JSON.stringify(pyme.id_pyme))
  }

  getPyme(): any {
    return JSON.parse(localStorage.getItem('id_pyme') || '{}')
  }

  getUsuario(): any {
    return JSON.parse(localStorage.getItem('usuario') || '{}');
  }

  cerrarSesion(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    localStorage.removeItem('vendedor')
    localStorage.removeItem('repartidor')
    localStorage.removeItem('id_usuario')
    localStorage.removeItem('id_pyme')
    this.toastr.success('Sesion cerrada')
    this.router.navigate([''])
  }
}
