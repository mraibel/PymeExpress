import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ipv4: string = '192.168.1.13'

  constructor(
    private http: HttpClient
  ) { }

  getUsuario(id: any): Observable<any> {
    return this.http.get<any>(`http://${this.ipv4}:3000/api/usuarios/${id}`).pipe(map((res:any) => res))
  }

  getRepartidores(): Observable<any> {
    return this.http.get<any>(`http://${this.ipv4}:3000/api/usuarios/repartidores/`).pipe(map((res:any) => res))
  }

  getVendedores(): Observable<any> {
    return this.http.get<any>(`http://${this.ipv4}:3000/api/usuarios/vendedores/`).pipe(map((res:any) => res))
  }
}
