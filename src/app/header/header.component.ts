import { Component} from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //Variables para el manejo del carro
  mostrarCarrito: boolean = false

  constructor(
    public autenticacionServicio: AutenticacionService
  ){}
  
  // Manejo del carro
  toggleCarrito() : void {
    this.mostrarCarrito = !this.mostrarCarrito
  }

  receiveData(data: boolean): void {
    this.mostrarCarrito = false
  }
}
