import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

  @Output() sendData = new EventEmitter<boolean>()

  public productos: any[][] = []

  constructor(
    public carritoServicio: CarritoService
  ) {}

  cerrarCarrito() {
    this.sendData.emit(true)
  }

  noCerrar(event: MouseEvent) : void {
    event.stopPropagation()
  }

  ngOnInit(): void {
  }

}
