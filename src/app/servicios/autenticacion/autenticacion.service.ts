import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  usuario: any

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) {}

  login(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/autenticacion/iniciar', user)
            .pipe(map((data) =>{
              if(data) {
                this.setToken(data.token)
                this.setUsuarioIniciado(data.usuario)
              }
            }))
  }

  register(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/autenticacion/registrar", user)
              .pipe(map((data) =>{
              if(data) {
                this.setToken(data.token)
                this.setUsuarioIniciado(data.usuario)
              }
              }))
  }

  setToken(token: string): void {
    this.cookies.set("token", token);
  }

  setUsuarioIniciado(user: any) {
    this.usuario = user
  }

  getUsuarioIniciado(): any {
    console.log(this.cookies.get('token'))
  }

  cerrarSesion(): void {
    this.cookies.delete("token")
  }

}
