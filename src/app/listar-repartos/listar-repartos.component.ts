import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { RepartidorService } from '../servicios/repartidor.service';
import * as L from 'leaflet';
import { LatLngExpression } from 'leaflet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-repartos',
  templateUrl: './listar-repartos.component.html',
  styleUrls: ['./listar-repartos.component.css']
})
export class ListarRepartosComponent implements OnInit, AfterViewInit {
  repartos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private repartidorService: RepartidorService,
    private autenticacionServicio: AutenticacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarRepartos();
  }

  ngAfterViewInit(): void {
    // No es necesario llamar a initMaps aquí si ya lo hacemos en ngOnInit
  }

  cargarRepartos(): void {
    const id = this.autenticacionServicio.getId();
    if (id !== null) {
      this.repartidorService.getRepartos(id).subscribe(
        repartos => {
          repartos.forEach(e => {
            if (e.estado)this.repartos.push(e)  
          });
          console.log('Repartos cargados:', this.repartos);
          this.initMaps();
        },
        error => {
          console.error('Error al obtener los repartos', error);
        }
      );
    } else {
      console.error('No se pudo obtener el ID del repartidor');
    }
  }

  initMaps(): void {
    console.log('Iniciando mapas');
    setTimeout(() => {
      this.repartos.forEach(reparto => {
        console.log('Inicializando mapa para reparto:', reparto);
        this.initMap(reparto);
      });
    }, 100);
  }

  initMap(reparto: any): void {
    if (!reparto || !reparto.id_pedido) {
      console.error('Reparto inválido:', reparto);
      return;
    }

    console.log(`Iniciando mapa para reparto ${reparto.id_pedido}`);
    const mapElement = document.getElementById(`map-${reparto.id_pedido}`);
    if (mapElement) {
      console.log('Elemento del mapa encontrado');

      const coordenadas: LatLngExpression[] = [
        [-33.4569, -70.6483], // Santiago
        [-36.8201, -73.0440], // Concepción
        [-41.4720, -72.9424], // Puerto Montt
        [-33.0472, -71.6127], // Valparaíso
        [-29.9027, -71.2524]  // La Serena
      ];

      const coordenadaAleatoria: LatLngExpression = coordenadas[Math.floor(Math.random() * coordenadas.length)];
      console.log('Coordenadas seleccionadas:', coordenadaAleatoria);

      const map = L.map(mapElement, {
        center: coordenadaAleatoria,
        zoom: 13
      });
      console.log('Mapa creado');

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      console.log('Capa de mapa añadida');

      L.marker(coordenadaAleatoria).addTo(map);
      console.log('Marcador añadido');
    } else {
      console.error(`Elemento del mapa no encontrado para reparto ${reparto.id_pedido}`);
    }
  }

  toggleSelectAll(event: any): void {
    const checked = event.target.checked;
    this.repartos.forEach(reparto => reparto.selected = checked);
  }

  buscarOrden() {
    this.router.navigate(['/buscar-orden']);
  }

  comenzarReparto(): void {
    const seleccionados = this.repartos.filter(reparto => reparto.selected);
    if(seleccionados.length){
      console.log('Repartos seleccionados:', seleccionados);
      const navigationExtras: NavigationExtras = {
        state: { repartos: seleccionados }
      };
      this.router.navigate(['/repartiendo'], navigationExtras);
    }else{
      this.toastr.info("Debe seleccionar por lo menos un reparto")
    }
    
  }
}
