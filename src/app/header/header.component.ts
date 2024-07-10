import { Component } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';



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
    private router: Router 
  ){}

  // Manejo del carro
  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  receiveData(data: boolean): void {
    this.mostrarCarrito = false;
  }

  pymeProductos(): void {
    const id_pyme = this.autenticacionServicio.getPyme();
    console.log(id_pyme)
    if (id_pyme) {
      this.router.navigate(['/productos-pyme/' + id_pyme]);
    } else {
      console.error('Este usuario no es vendedor');
    }
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
  }

  estaAutenticado(): boolean {
    return this.autenticacionServicio.getToken() !== null; 
  }
}