import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsuario(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuarios/${id}`).pipe(map((res:any) => res))
  }

  getRepartidores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuarios/repartidores/`).pipe(map((res:any) => res))
  }

  getVendedores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuarios/vendedores/`).pipe(map((res:any) => res))
  }
}
