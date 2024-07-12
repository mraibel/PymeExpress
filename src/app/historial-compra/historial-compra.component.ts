import { Component } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrl: './historial-compra.component.css'
})
export class HistorialCompraComponent {

  public compras: any[] = []

  constructor(
    public pedidosServicio: PedidosService,
    public route: ActivatedRoute
  ) {
    
    this.route.paramMap.subscribe((params: any) => {
      this.pedidosServicio.getPedidosCliente(params.get('id')).subscribe((data: any) => {
        console.log(data)
        this.pedidosServicio.pedidosCliente = data
        this.compras = data
      })
    })

  }

  ngOnInit(): void {

  }

}
