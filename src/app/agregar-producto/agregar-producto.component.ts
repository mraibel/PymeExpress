import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { CarritoService } from '../servicios/carrito/carrito.service';

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
  producto: any
  public cantidad: number = 1

  constructor(
    private productoServicio: ProductosService,
    public carritoServicio: CarritoService
  ) {}

  // Manejo del producto a mostrar
  ngOnInit(): void {
    this.getProducto();
  }
  
  getProducto(): void {
    this.productoServicio.getProductoId(this.id).subscribe((producto: any) =>{
      this.producto = producto
    })
  }

  // Manejo de la ventana
  cerrarVentana() {
    this.sendData.emit(true)
  }

  noCerrar(event: MouseEvent) : void {
    event.stopPropagation()
  }
}
