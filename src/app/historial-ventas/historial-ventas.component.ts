import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrl: './historial-ventas.component.css'
})
export class HistorialVentasComponent implements OnInit {

  public pedidos: any[] = []
  
  constructor(
    public pedidosServicio: PedidosService,
    public route: ActivatedRoute
  ) {
    
    this.route.paramMap.subscribe((params: any) => {
      this.pedidosServicio.getPedidosVendedor(params.get('id')).subscribe((data: any) => {
        this.pedidosServicio.pedidosVendedor = data
        this.pedidos = data
        console.log(data)
      })
    })

  }

  ngOnInit(): void {

  }

}
