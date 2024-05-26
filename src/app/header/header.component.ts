import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //Variables para el manejo del carro
  mostrarCarrito: boolean = false
  
  // Manejo del carro
  toggleCarrito() : void {
    this.mostrarCarrito = !this.mostrarCarrito
  }

  receiveData(data: boolean): void {
    this.mostrarCarrito = false
  }
}
