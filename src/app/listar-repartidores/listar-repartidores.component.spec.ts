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
  elegirRepartidor(_t5: any) {
    throw new Error('Method not implemented.');
    }
}
