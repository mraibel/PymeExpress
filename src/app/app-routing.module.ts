import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  { path: '', component: GondolaProductosComponent },
  { path: 'producto/:id_producto', component: ProductoComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos-pyme/:id', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
