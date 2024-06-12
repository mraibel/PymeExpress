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
      this.productosServicio.productos = data
      data.forEach((e) => {
        if(!this.productosServicio.categorias.includes(e.categoria)){
          this.productosServicio.categorias.push(e.categoria)
        }
        if(!this.productosServicio.pymes.includes(e.vendedor.pyme.nombre)){
          this.productosServicio.pymes.push(e.vendedor.pyme.nombre)
        }
        if(!this.productosServicio.precios.includes(e.precio)){
          this.productosServicio.precios.push(e.precio)
        }
      })
    },
    err =>{
      console.log(err)
    })
    this.productosMostrar() 
  }
  productosMostrar() {
    
    for (let index = 0; index < 4; index++) {
      let indexProducto = Math.floor(Math.random()*this.productosServicio.productos.length)
      console.log(indexProducto)
      this.productosServicio.productosRecomendados.push(this.productosServicio.productos.find((e,i)=>i ==indexProducto))
    }
  }
  
}
