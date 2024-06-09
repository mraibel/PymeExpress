import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenProductoPipe } from './pipe/imagen-producto.pipe';
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GondolaProductosComponent,
    FooterComponent,
    CarritoComponent,
    ProductoComponent,
    AgregarProductoComponent,
    InicioSesionComponent,
    RegistroComponent,
    ImagenProductoPipe,
    FiltroProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
