import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

type Matriz = [any, any][];

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private toastr: ToastrService 
  ) { 

    const productosGuardados = localStorage.getItem('carrito')
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

  productos: Matriz = [];
  descuento: number = 0;

  agregarProducto = (producto: any, cantidad: number) => {
    let encontrado = false
    let fila = 0
    
    for (let i = 0; i < this.productos.length; i++) {
      if(this.comparaObjetos(this.productos[i][0], producto)){
        encontrado = true
        fila = i
        break
      }
    }
    if(encontrado) {
      if(this.productos[fila][1] + cantidad <= producto.cantidad){
        this.productos[fila][1] = this.productos[fila][1] + cantidad
        this.toastr.success('Producto agregado con éxito')
      }else {
        this.toastr.error(`No se puede agregar esta cantidad, el stock disponible es ${producto.cantidad}`)
        return 
      }
    } else {
      this.productos.push([producto, cantidad])
      this.toastr.success('Producto agregado con éxito')
    }
    this.actualizarStorage()
  }

  obtenerTotal() {
    let total = 0
    for (let i = 0; i < this.productos.length; i++) {
      total = total + this.productos[i][0].precio * this.productos[i][1]
    }
    if (this.descuento > 0) {
      total -= (total * (this.descuento / 100));
    }
    return total
  }

  obtenerProductos(): any[] {
    return this.productos
  }

  limpiarCarrito(): void {
    this.productos = []
    this.descuento = 0;
    this.actualizarStorage()
    this.toastr.info('Carrito vaciado con éxito')
  }


  eliminarProducto(producto: any): void {
    let encontrado = false
    let fila = 0

    for (let i = 0; i < this.productos.length; i++) {
      if(this.comparaObjetos(this.productos[i][0], producto)){
        encontrado = true
        fila = i
        break
      }
    }
    console.log(encontrado)

    if(encontrado) {
      if (fila >= 0 && fila < this.productos.length) {
        this.productos.splice(fila, 1);
        this.toastr.success('Producto eliminado del carrito')
      }
    } else {
      this.toastr.error('No se pudo eliminar el producto del carrito')
      return
    }

    this.actualizarStorage()
  }

  actualizarProducto(producto: any, accion: any): void {

    for (let i = 0; i < this.productos.length; i++) {
      if(this.comparaObjetos(this.productos[i][0], producto)){
        if(accion === '-') {
          if(this.productos[i][1] > 1) {
            this.productos[i][1] = this.productos[i][1] - 1
            this.actualizarStorage()
            return
          } else {
            this.productos.splice(i, 1)
            this.toastr.error('Producto eliminado')
            return
          }
        } else if(accion === '+') {
          if(this.productos[i][1] < this.productos[i][0].cantidad) {
            this.productos[i][1] = this.productos[i][1] + 1
            this.actualizarStorage()
            return
          } else {
            this.toastr.error(`El stock disponible para este producto es ${this.productos[i][0].cantidad}`)
            return
          }
        }
      }
    }

  }

  aplicarDescuento(codigo: string): void {
    if (codigo === 'DESC10') {
      this.descuento = 10;
      this.toastr.success('Descuento del 10% aplicado');
    } else {
      this.toastr.error('Código de descuento inválido');
    }
  }

  actualizarStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.productos))
  }

  private comparaObjetos(productoEnCarro: any, productoAGuardar: any): boolean {

    if(productoEnCarro.id_producto === productoAGuardar.id_producto && productoEnCarro.nombre === productoAGuardar.nombre){
      return true
    }

    return false
  }
}
