import { Component, OnInit } from '@angular/core'
import { ProductosService } from '../servicios/productos.service'

@Component({
  selector: 'app-gondola-productos',
  templateUrl: './gondola-productos.component.html',
  styleUrl: './gondola-productos.component.css'
})
export class GondolaProductosComponent implements OnInit {

  productosFiltrados: any[] = [];
  totalRecords: number = 0
  rows: number = 9;
  first: number = 0;

  // Variables para el manejo de ventana del producto
  mostrarVentana: boolean = false
  id_producto: number = 0

  constructor(
    public productosServicio: ProductosService
  ) {}
  
  // Manejo de ventana
  toggleVentana(id_producto: number) : void {
    this.mostrarVentana = !this.mostrarVentana
    this.id_producto = id_producto
  }
  
  receiveData(data: boolean): void {
    this.mostrarVentana = false
  }
  
  // Lo primero que carga al renderizar el componente
  ngOnInit(): void {
    this.productosServicio.getProductos().subscribe((productos: any[]) => {
      this.productosServicio.productosFiltrados = productos
      this.totalRecords = productos.length
      this.updateProductList()
    })
  }

  eventoFiltro(event: any): void {
    this.first = 0
    this.updateProductList()
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updateProductList();
  }

  updateProductList() {
    this.productosFiltrados = this.productosServicio.productosFiltrados.slice(this.first, this.first + this.rows);
  }

}
