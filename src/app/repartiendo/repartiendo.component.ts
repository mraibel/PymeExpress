import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';
import { LatLngExpression } from 'leaflet';
import { PedidosService } from '../servicios/pedidos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repartiendo',
  templateUrl: './repartiendo.component.html',
  styleUrls: ['./repartiendo.component.css']
})
export class RepartiendoComponent implements OnInit {
  repartos: any[] = [];
  map: L.Map | null = null;

  constructor(
    private router: Router,
    private pedidosServicio: PedidosService,
    private toastr: ToastrService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as { repartos: any[] };
      console.log('Estado recibido:', state);
      if (state && state.repartos) {
        this.repartos = state.repartos;
        console.log('Repartos recibidos:', this.repartos);
      }
    } else {
      console.log('No se recibieron datos en la navegación');
    }
  }

  ngOnInit(): void {
    if (this.repartos.length > 0) {
      this.initMap();
    } else {
      console.error('No se recibieron repartos');
      // Aquí podrías manejar el caso de que no haya repartos, por ejemplo:
      // this.router.navigate(['/pagina-de-error']);
    }
  }

  initMap(): void {
    if (this.repartos.length > 0) {
      const coordenadas: LatLngExpression[] = [
        [-33.4569, -70.6483], // Santiago
        [-36.8201, -73.0440], // Concepción
        [-41.4720, -72.9424], // Puerto Montt
        [-33.0472, -71.6127], // Valparaíso
        [-29.9027, -71.2524]  // La Serena
      ];

      const coordenadaAleatoria: LatLngExpression = coordenadas[Math.floor(Math.random() * coordenadas.length)];

      this.map = L.map('map', {
        center: coordenadaAleatoria,
        zoom: 13
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.actualizarMarcadores();
    }
  }

  actualizarMarcadores(): void {
    if (this.map) {
      // Limpiar marcadores existentes
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map!.removeLayer(layer);
        }
      });

      // Añadir nuevos marcadores
      const coordenadas: LatLngExpression[] = [
        [-33.4569, -70.6483], // Santiago
        [-36.8201, -73.0440], // Concepción
        [-41.4720, -72.9424], // Puerto Montt
        [-33.0472, -71.6127], // Valparaíso
        [-29.9027, -71.2524]  // La Serena
      ];

      this.repartos.forEach(reparto => {
        const coordenada = coordenadas[Math.floor(Math.random() * coordenadas.length)];
        L.marker(coordenada).addTo(this.map!).bindPopup(reparto.especificaciones);
      });
    }
  }

  entregarPedido(reparto: any): void {
    console.log('Pedido entregado:', reparto);
    this.pedidosServicio.actualizarPedido(reparto.id_pedido, { estado: 0 }).subscribe(
      response => {
        console.log(`Reparto aceptado: ${reparto.id_pedido}`);
        this.toastr.success("Reparto entregado");
        this.actualizarReparto(reparto.id_pedido);
      },
      error => {
        console.error('Error al aceptar el reparto', error);
        this.toastr.error("Error al entregar el reparto");
      }
    );
  }

  actualizarReparto(idPedido: number): void {
    // Eliminar el reparto entregado de la lista
    this.repartos = this.repartos.filter(reparto => reparto.id_pedido !== idPedido);
    
    // Actualizar los marcadores en el mapa
    this.actualizarMarcadores();

    // Si no quedan más repartos, redirigir a otra página
    if (this.repartos.length === 0) {
      const id = localStorage.getItem("id_usuario")
      this.toastr.info("Todos los repartos han sido entregados");
      this.router.navigate(['/repartos/'+id]); // Ajusta esta ruta según tu aplicación
    }
  }

  noEntregarPedido(reparto: any): void {
    console.log('No se pudo entregar el pedido:', reparto);
    // Aquí puedes abrir un modal para indicar el motivo
  }
}