import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { CrearRepartidorComponent } from './crear-repartidor/crear-repartidor.component';
import { ListarRepartosComponent } from './listar-repartos/listar-repartos.component';
import { PagoComponent } from './pago/pago.component';
import { CrearPymeComponent } from './crear-pyme/crear-pyme.component';

// Guards
import { pymeGuard } from './guards/pyme.guard';
import { iniciadoGuard } from './guards/iniciado.guard';
import { vendedorGuard } from './guards/vendedor.guard';
import { sesionIniciadaGuard } from './guards/sesion-iniciada.guard';
import { repartidorGuard } from './guards/repartidor.guard';
import { BuscarOrdenComponent } from './buscar-orden/buscar-orden.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'producto/:id_producto', component: ProductoComponent },
  { path: 'inicioSesion', component: InicioSesionComponent, canActivate:[iniciadoGuard] },
  { path: 'registro', component: RegistroComponent, canActivate:[iniciadoGuard] },
  { path: 'pago', component: PagoComponent }
  { path: 'productos-pyme/:id', component: ListarProductosComponent, canActivate:[pymeGuard]},
  { path: 'repartos/:id', component: ListarRepartosComponent, canActivate:[repartidorGuard]},
  { path: 'crear-producto', component: CrearProductoComponent, canActivate:[vendedorGuard] },
  { path: 'productos', component: GondolaProductosComponent },
  { path: 'crear-pyme', component: CrearPymeComponent, canActivate:[sesionIniciadaGuard]},
  { path: 'buscar-orden', component: BuscarOrdenComponent, canActivate:[repartidorGuard]},
  { path: 'crear-repartidor', component: CrearRepartidorComponent, canActivate:[sesionIniciadaGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
