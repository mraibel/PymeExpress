import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  

  private apiUrl = environment.apiUrl;
  public repartidores: any[] = []

  constructor(private http: HttpClient) { }

  getRepartidores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios/repartidores`).pipe(
      map((res: any) => {
        this.repartidores = res
        return res
      })
    )
  }
  
  getRepartos(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/pedidos/repartidor/${id}`).pipe(map((data:any) => data));
  }
}
