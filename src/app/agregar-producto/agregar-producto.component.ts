import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../gondola-productos/productos.service';
import { IProduct } from '../gondola-productos/productos';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  
  // Variable manejo de la ventana
  @Output() sendData = new EventEmitter<boolean>()

  // Variables del producto a mostrar
  @Input() id: any
  producto: IProduct | undefined

  constructor(
    private productoServicio: ProductosService
  ) {}

  // Manejo del producto a mostrar
  ngOnInit(): void {
    this.getProducto();
  }
  
  getProducto(): void {
    this.producto = this.productoServicio.getProductoId(this.id)
  }

  // Manejo de la ventana
  cerrarVentana() {
    this.sendData.emit(true)
  }

  noCerrar(event: MouseEvent) : void {
    event.stopPropagation()
  }
}
