import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { RepartidorService } from '../servicios/repartidor.service';

@Component({
  selector: 'app-buscar-orden',
  templateUrl: './buscar-orden.component.html',
  styleUrl: './buscar-orden.component.css'
})
export class BuscarOrdenComponent implements OnInit{
  repartos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private repartidorService: RepartidorService,
    private autenticacionServicio: AutenticacionService
  ) { }

  ngOnInit(): void {
    const id = this.autenticacionServicio.getId();
    if (id !== null) {
      this.repartidorService.getRepartosSinRepartidor().subscribe(
        repartos => {
          this.repartos = repartos;
        },
        error => {
          console.error('Error al obtener los repartos', error);
        }
      );
    } else {
      console.error('No se pudo obtener el ID del repartidor');
    }
  }

  toggleSelectAll(event: any): void {
    const checked = event.target.checked;
    this.repartos.forEach(reparto => reparto.selected = checked);
  }

  buscarOrden() {
    this.router.navigate(['/buscar-orden']);
  }
  
}
