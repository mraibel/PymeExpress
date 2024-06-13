import { Component, OnInit } from '@angular/core';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(
    private productosServicio: ProductosService
  ) {}

  ngOnInit(): void {
    this.productosServicio.getProductos().subscribe((data: any[])=>{
      console.log('Datos de productos cargados')
    },
    err =>{
      console.log(err)
    })
    this.productosMostrar() 
  }
  productosMostrar() {
    
    for (let index = 0; index < 4; index++) {
      let indexProducto = Math.floor(Math.random()*this.productosServicio.productos.length)
      this.productosServicio.productosRecomendados.push(this.productosServicio.productos.find((e,i)=>i ==indexProducto))
    }
  }
  
}
