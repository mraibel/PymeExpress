import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  public compra: any;

  constructor(
    private route: ActivatedRoute,
    private pedidosServicio: PedidosService
  ) {
    this.route.paramMap.subscribe((params: any) => {
      this.pedidosServicio.pedidosCliente.find((pedido: any) => {
        if (pedido.id_pedido == params.get('id')) {
          this.compra = pedido
          console.log(this.compra)
          console.log(this.compra.estado)
        }
      })
    })
  }
  ngOnInit(): void {
    
  }
}