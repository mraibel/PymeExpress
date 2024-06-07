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
      })
    },
    err =>{
      console.log(err)
    })
  }

}
