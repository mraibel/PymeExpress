import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: any[] = [];
  idUser: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.idUser = +id;
      this.productosService.getProductosVendedor(this.idUser).subscribe(productos => {
        this.productos = productos;
      });
    } else {
      // Maneja el caso donde 'id' es null
      console.error('No se pudo obtener el ID del Vendedor');
    }
  }
}
