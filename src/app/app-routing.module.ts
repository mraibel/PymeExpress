import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

// Guards
import { pymeGuard } from './guards/pyme.guard';
import { iniciadoGuard } from './guards/iniciado.guard';
import { vendedorGuard } from './guards/vendedor.guard';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'producto/:id_producto', component: ProductoComponent },
  { path: 'inicioSesion', component: InicioSesionComponent, canActivate:[iniciadoGuard] },
  { path: 'registro', component: RegistroComponent, canActivate:[iniciadoGuard] },
  { path: 'productos-pyme/:id', component: ListarProductosComponent, canActivate:[pymeGuard]},
  { path: 'crear-producto', component: CrearProductoComponent, canActivate:[vendedorGuard] },
  { path: 'productos', component: GondolaProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
