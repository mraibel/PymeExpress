import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  @Output() sendData = new EventEmitter<boolean>()

  cerrarCarrito() {
    this.sendData.emit(true)
  }

  noCerrar(event: MouseEvent) : void {
    event.stopPropagation()
  }
}
