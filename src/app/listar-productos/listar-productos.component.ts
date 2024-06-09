import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: any[] = [];
  productoActual: any = {};
  idUser: number = 0;
  modalRef?: BsModalRef;
  nuevaExistenciaMasiva: number | null = null;
  nuevoPrecioMasivo: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.idUser = +id;
      this.productosService.getProductosVendedor(this.idUser).subscribe(productos => {
        this.productos = productos;
      });
    } else {
      console.error('No se pudo obtener el ID del Vendedor');
    }
  }

  abrirModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  abrirModalEditarExistencia(template: TemplateRef<any>, producto: any): void {
    this.productoActual = { ...producto };
    this.modalRef = this.modalService.show(template);
  }

  abrirModalEditarProducto(template: TemplateRef<any>, producto: any): void {
    this.productoActual = { ...producto };
    this.modalRef = this.modalService.show(template);
  }

  guardarExistencia(): void {
    this.productosService.actualizarExistencia(this.productoActual.id_producto, this.productoActual.existencia).subscribe(() => {
      const index = this.productos.findIndex(p => p.id_producto === this.productoActual.id_producto);
      if (index !== -1) {
        this.productos[index].existencia = this.productoActual.existencia;
      }
      this.modalRef?.hide();
    });
  }

  guardarProducto(): void {
    this.productosService.actualizarProducto(this.productoActual.id_producto, this.productoActual).subscribe(() => {
      const index = this.productos.findIndex(p => p.id_producto === this.productoActual.id_producto);
      if (index !== -1) {
        this.productos[index] = { ...this.productoActual };
      }
      this.modalRef?.hide();
    });
  }

  eliminarProducto(id: number): void {
    this.productosService.eliminarProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id_producto !== id);
    });
  }

  realizarCambiosMasivos(template: TemplateRef<any>): void {
    const productosSeleccionados = this.productos.filter(producto => producto.selected);
    if (productosSeleccionados.length > 0) {
      this.abrirModal(template);
    } else {
      console.log('No hay productos seleccionados');
    }
  }

  aplicarCambiosExistencia(): void {
    const productosSeleccionados = this.productos.filter(producto => producto.selected);
    productosSeleccionados.forEach(producto => {
      if (this.nuevaExistenciaMasiva !== null) {
        producto.existencia = this.nuevaExistenciaMasiva;
        this.productosService.actualizarExistencia(producto.id_producto, producto.existencia).subscribe(() => {
          console.log(`Producto ${producto.id_producto} actualizado`);
        });
      }
    });
    this.modalRef?.hide();
  }

  aplicarCambiosPrecio(): void {
    const productosSeleccionados = this.productos.filter(producto => producto.selected);
    productosSeleccionados.forEach(producto => {
      if (this.nuevoPrecioMasivo !== null) {
        producto.precio = this.nuevoPrecioMasivo;
        this.productosService.actualizarProducto(producto.id_producto, producto).subscribe(() => {
          console.log(`Producto ${producto.id_producto} actualizado`);
        });
      }
    });
    this.modalRef?.hide();
  }

  eliminarProductosSeleccionados(): void {
    const productosSeleccionados = this.productos.filter(producto => producto.selected);
    productosSeleccionados.forEach(producto => {
      this.eliminarProducto(producto.id_producto);
    });
    this.modalRef?.hide();
  }

  crearProducto(): void {
    this.router.navigate(['/crear-producto']);
  }

  toggleActivo(producto: any): void {
    producto.activo = !producto.activo;
    this.productosService.actualizarActivo(producto.id_producto, producto.activo).subscribe(() => {
      console.log(`Producto ${producto.id_producto} actualizado`);
    });
  }
}
