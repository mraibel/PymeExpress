
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  cupon: string = '';

  constructor(
    public carritoServicio: CarritoService,
    private router: Router,
    private authService: AutenticacionService
    
  ) { }

  procederPago() {
    // Implementar la lógica para proceder con el pago
   
  }
  estaAutenticado(): boolean {
    return this.authService.getToken() !== null; 
  }

  aplicarCupon(): void {
    this.carritoServicio.aplicarDescuento(this.cupon);
  }

  obtenerTotal(): number {
    return this.carritoServicio.obtenerTotal();
  }

  obtenerProductos(): any[] {
    return this.carritoServicio.obtenerProductos();
  }
}
