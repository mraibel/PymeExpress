import { Component, OnInit } from '@angular/core';
import { IProduct } from '../gondola-productos/productos';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../gondola-productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  producto: IProduct | undefined
  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private productoServicio: ProductosService
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }
  
  getProducto(): void {
    this.route.params.subscribe(e => {
      this.id = e['id_producto']
    })
    this.producto = this.productoServicio.getProductoId(this.id)
  }

}
