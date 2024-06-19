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
  public pymes: any[] = [];
  public precios: number[] = [];
  public productosRecomendados: any[]= [];

  constructor(private http: HttpClient) { }

  // LEER PRODUCTOS
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos/`).pipe(
      map((res:any) => {
        this.productos = res
        res.forEach((producto: any) => {
          if(!this.categorias.includes(producto.categoria)) {
            this.categorias.push(producto.categoria)
          }
        })
        res.forEach((producto: any) => {
          if(!this.pymes.includes(producto.vendedor.pyme.nombre)) {
            this.pymes.push(producto.vendedor.pyme.nombre)
          }
        })
        res.forEach((producto: any) => {
          if(!this.precios.includes(producto.precio)) {
            this.precios.push(producto.precio)
          }
        })
        this.productosRecomendados.push(res.pop())
        this.productosRecomendados.push(res.pop())
        this.productosRecomendados.push(res.pop())
        this.productosRecomendados.push(res.pop())
        return res
      }
    ))
  }

  // LEER PRODUCTO POR ID
  getProductoId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos/${id}`).pipe(map((data:any) => data));
  }

  // LEER PRODUCTOS DE VENDEDOR
  getProductosVendedor(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/productos/vendedor/${id}`).pipe(map((data:any) => data));
  }

  // CREAR PRODUCTO
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/productos/`, producto);
  }

  // ELIMINAR PRODUCTO
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/productos/${id}`);
  }

  // ACTUALIZAR PRODUCTO
  actualizarProducto(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/productos/actualizar/${id}`, datos);
  }

  // ACTUALIZAR CANTIDAD
  actualizarCantidad(id: number, cantidad: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/productos/actualizar/${id}`, { cantidad });
  }

  // ACTUALIZAR ESTADO ACTIVO
  actualizarActivo(id: number, activo: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/productos/actualizar/${id}`, { activo });
  }
}
