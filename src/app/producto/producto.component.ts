import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  producto: any
  id: any

  constructor(
    private route: ActivatedRoute,
    private productoServicio: ProductosService
  ) {}

  ngOnInit(): void {
    this.getIdProducto()
    this.producto = this.productoServicio.productos.find(e => e.id_producto == this.id)
  }
  
  getIdProducto(): void {
    this.route.params.subscribe(e => {
      this.id = e['id_producto']
    })
  }
}
