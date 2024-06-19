import { Component } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
   public banner = "../../assets/fondo-banner2.png";
   logo = "../../assets/logo.png";

   constructor(
    public autenticacionServicio: AutenticacionService
   ) {}


}
