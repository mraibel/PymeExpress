import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = environment.apiUrl;
  public pedidosVendedor: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  // CREAR PEDIDO
  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pedidos/`, pedido)
  }

  // LEER PEDIDO
  getPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pedidos/${id}`).pipe(map((res:any) => res))
  }

  // obtener pedidos de un cliente
  getPedidosCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pedidos/cliente/${id}`).pipe(map((res:any) => res))
  }

  // ACTUALIZAR PEDIDO
  actualizarPedido(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/pedidos/${id}`, datos)
  }

  getPedidosVendedor(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/pedidos/vendedor/${id}`).pipe(map((res:any) => res))
  }

}
