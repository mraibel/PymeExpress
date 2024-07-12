import { Component } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Variables para el manejo del carro
  mostrarCarrito: boolean = false;

  constructor(
    public autenticacionServicio: AutenticacionService,
    private router: Router,
    private pedidosServicio: PedidosService
  ){}

  // Manejo del carro
  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  receiveData(data: boolean): void {
    this.mostrarCarrito = false;
  }

  historialCompras(): void {
    const id_cliente = this.autenticacionServicio.getId()
    this.router.navigate(['/historial-compras/' + id_cliente])
  }

  pymeProductos(): void {
    const id_pyme = this.autenticacionServicio.getPyme();
    if (id_pyme) {
      this.router.navigate(['/productos-pyme/' + id_pyme]);
    } else {
      console.error('Este usuario no es vendedor');
    }
  }

  historialVentas(): void {
    const id_vendedor = this.autenticacionServicio.getId()
    if(id_vendedor) {
      this.pedidosServicio.getPedidosVendedor(id_vendedor).subscribe((data: any) => {
        this.pedidosServicio.pedidosVendedor = data
        this.router.navigate(['/historial-ventas/' + id_vendedor]);
      })
    }
  }

  repartidorOrdenes() {
    const id_rep = this.autenticacionServicio.getId()
    if (id_rep) {
      this.router.navigate(['/repartos/' + id_rep]);
    } else {
      console.error('Este usuario no es repartidor');
    }
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
  }

  estaAutenticado(): boolean {
    return this.autenticacionServicio.getToken() !== null; 
  }
}