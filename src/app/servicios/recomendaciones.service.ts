import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  ipv4: string = '192.168.1.13'

  constructor(
    private http: HttpClient
  ) { }

  // INGRESAR RECOMENDACION
  crearRecomendacion(recomendacion: any): Observable<any> {
    return this.http.post<any>(`http://${this.ipv4}:3000/api/recomendaciones/`, recomendacion)
  }

  // LEER RECOMENDACIONES
  // Obtener recomendacion por repartidor
  getRecomendacionesRepartidor(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://${this.ipv4}:3000/api/recomendaciones/${id}`).pipe(map((res:any) => res))
  }

}
