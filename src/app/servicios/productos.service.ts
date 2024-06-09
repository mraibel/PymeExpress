import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = environment.apiUrl;

  public productos: any[] = [];
  public categorias: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  //LEER PRODUCTOS
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos/`).pipe(map((res:any) => res));
  }

  // leer producto por id
  getProductoId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos/${id}`).pipe(map((data:any) => data));
  }

  // leer productos de vendedor
  getProductosVendedor(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/productos/vendedor/${id}`).pipe(map((data:any) => data));
  }

  //CREAR PRODUCTOS  
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/productos/`, producto);
  }

  //ELIMINAR PRODUCTOS 
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/productos/${id}`);
  }

  //ACTUALIZAR PRODUCTOS
  actualizarProducto(id: number, datos:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/productos/${id}`, datos);
  }
}
