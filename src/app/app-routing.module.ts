import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { vendedorGuard } from './guards/vendedor.guard';


const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'producto/:id_producto', component: ProductoComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos-pyme/:id', component: ListarProductosComponent, canActivate:[vendedorGuard]},
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'productos', component: GondolaProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
