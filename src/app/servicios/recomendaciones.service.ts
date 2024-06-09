import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // INGRESAR RECOMENDACION
  crearRecomendacion(recomendacion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/recomendaciones/`, recomendacion)
  }

  // LEER RECOMENDACIONES
  // Obtener recomendacion por repartidor
  getRecomendacionesRepartidor(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recomendaciones/${id}`).pipe(map((res:any) => res))
  }

}
