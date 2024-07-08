import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.css'
})
export class FiltroProductosComponent implements OnInit{

  @Output() filtro = new EventEmitter<any>();

  formFiltro: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public productosServicio: ProductosService
  ){
    this.formFiltro = this.formBuilder.group({
      categorias: [''],
      pymes: [''],
      precios: []
    })
  }

  ngOnInit(): void {
    
  }

  obtenerPrecioMayor(): number{
    return Math.max(...this.productosServicio.precios)
  }

  obtenerPrecioMenor(): number {
    return Math.min(...this.productosServicio.precios)
  }

  filtrar(): void {
    const categorias: any[] = this.formFiltro.get('categorias')?.value
    const pymes: any[] = this.formFiltro.get('pymes')?.value
    const precios: any[] = this.formFiltro.get('precios')?.value

    const productos = this.productosServicio.productos.filter((producto:any) => {
        const categoria = (categorias.length > 0 ? categorias.includes(producto.categoria): true)
        const pyme = (pymes.length > 0 ? pymes.includes(producto.vendedor.pyme.nombre): true)
        const precio = precios ? (producto.precio >= precios[0] && producto.precio <= precios[1]): true

        return categoria && pyme && precio
    })

    this.productosServicio.productosFiltrados = productos

    this.filtro.emit()

    this.toastr.success('Filtro aplicado')
  }

}
