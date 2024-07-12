import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrl: './detalle-venta.component.css'
})
export class DetalleVentaComponent {
  public venta: any;

  constructor(
    private route: ActivatedRoute,
    private pedidosServicio: PedidosService
  ) {
    this.route.paramMap.subscribe((params: any) => {
      this.pedidosServicio.pedidosVendedor.find((pedido: any) => {
        if (pedido.id_pedido == params.get('id')) {
          this.venta = pedido
          console.log(this.venta)
          
        }
      })
    })
  }
  ngOnInit(): void {

  }
}
