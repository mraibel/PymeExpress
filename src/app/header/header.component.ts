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
    const usuario = this.autenticacionServicio.getUsuario();
    console.log(usuario.id_usuario)
    if (usuario && usuario.id_usuario) {
      this.router.navigate(['/productos-pyme/' + usuario.id_usuario]);
    } else {
      console.error('Usuario no encontrado o no tiene ID');
    }
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
  }
}
