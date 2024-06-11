import { Component, OnInit } from '@angular/core';
import { RepartidorService } from '../services/repartidor.service';

@Component({
  selector: 'app-listar-repartidores',
  templateUrl: './listar-repartidores.component.html',
  styleUrls: ['./listar-repartidores.component.css']
})
export class ListarRepartidoresComponent implements OnInit {

  repartidores: any[] = [];

  constructor(private repartidorService: RepartidorService) { }

  ngOnInit(): void {
    this.obtenerRepartidores();
  }

  obtenerRepartidores(): void {
    this.repartidorService.getRepartidores().subscribe(
      data => this.repartidores = data,
      error => console.error(error)
    );
  }

  elegirRepartidor(repartidor: any): void {
    console.log('Repartidor elegido:', repartidor);
    // Aquí puedes agregar la lógica para manejar el repartidor elegido, por ejemplo, enviar el ID a una API.
  }
}

