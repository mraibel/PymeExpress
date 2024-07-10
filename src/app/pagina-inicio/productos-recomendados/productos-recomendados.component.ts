import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos-recomendados',
  templateUrl: './productos-recomendados.component.html',
  styleUrl: './productos-recomendados.component.css'
})
export class ProductosRecomendadosComponent{

  constructor(
    public productoServicio: ProductosService
  ) {}
}
