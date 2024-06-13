import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.css'
})
export class FiltroProductosComponent implements OnInit{

  _precios = 0

  constructor(
    public productosServicio: ProductosService
  ){}

  ngOnInit(): void {
  
  }

  set _precio(value: number) {
    this._precios = value
    console.log(this._precios.toString().split(',')[0])
    console.log(this._precios.toString().split(',')[1])
  }
  
  getOpciones(): Options {
    const opciones: Options = {
      floor: this.obtenerPrecioMenor(),
      ceil: this.obtenerPrecioMayor()
    }
    return opciones
  }

  obtenerPrecioMayor(): number{
    return Math.max(...this.productosServicio.precios)
  }

  obtenerPrecioMenor(): number {
    return Math.min(...this.productosServicio.precios)
  }
}
