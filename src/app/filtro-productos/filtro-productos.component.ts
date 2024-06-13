import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.css'
})
export class FiltroProductosComponent implements OnInit{

  constructor(
    public productosServicio: ProductosService
  ){}

  rango: number = 0

  ngOnInit() {
  }

  rangoMaximo(): number {
    if(this.rango == 0) {
      return this.obtenerPrecioMayor()
    } else {
      return this.rango
    }
  }

  get obtenerRango(): number {
    return this.rango
  }

  set obtenerRango(value: any){
    this.rango = value
  }

  obtenerPrecioMayor(): number{
    return Math.max(...this.productosServicio.precios)
  }

  obtenerPrecioMenor(): number {
    return Math.min(...this.productosServicio.precios)
  }
}
