import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ipv4: string = '192.168.1.13'

  public productos: any[] = []
  public categorias: any[] = []
  public pymes: any[] = []
  public precios: number[] = []

  constructor(
    private http: HttpClient
  ) { }

  //LEER PRODUCTOS
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/productos/`).pipe(map((res:any) => res))
  }

  // leer producto por id
  getProductoId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/productos/${id}`).pipe(map((data:any) => data))
  }

  // leer productos de vendedor
  getProductosVendedor(id: number): Observable<any[]> {
    return this.http.get<any>(`http://localhost:3000/api/productos/vendedor/${id}`).pipe(map((data:any) => data))
  }

  //CREAR PRODUCTOS  
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/productos/`, producto)
  }

  //ELIMINAR PRODUCTOS 
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/productos/${id}`)
  }

  //ACTUALIZAR PRODUCTOS
  actualizarProducto(id: number, datos:any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/productos/${id}`, datos)
  }
  
}
