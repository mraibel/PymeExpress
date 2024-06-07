import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  ipv4: string = '192.168.1.13'

  constructor(
    private http: HttpClient
  ) { }

  // CREAR PEDIDO
  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(`http://${this.ipv4}:3000/api/pedidos/`, pedido)
  }

  // LEER PEDIDO
  getPedido(id: number): Observable<any> {
    return this.http.get<any>(`http://${this.ipv4}:3000/api/pedidos/${id}`).pipe(map((res:any) => res))
  }

  // obtener pedidos de un cliente
  getPedidosCliente(id: number): Observable<any> {
    return this.http.get<any>(`http://${this.ipv4}:3000/api/pedidos/cliente/${id}`).pipe(map((res:any) => res))
  }

  // ACTUALIZAR PEDIDO
  actualizarPedido(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`http://${this.ipv4}:3000/api/pedidos/${id}`, datos)
  }

}
