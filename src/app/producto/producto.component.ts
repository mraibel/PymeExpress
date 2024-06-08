import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  producto: any
  id: any
  public cantidad: number = 1

  constructor(
    private route: ActivatedRoute,
    private productoServicio: ProductosService,
    public carritoServicio: CarritoService
  ) {}

  ngOnInit(): void {
    this.getIdProducto()
    this.productoServicio.getProductoId(this.id).subscribe((producto: any) =>{
      this.producto = producto
    })
  }

  
  getIdProducto(): void {
    this.route.params.subscribe(e => {
      this.id = e['id_producto']
    })
  }
}
