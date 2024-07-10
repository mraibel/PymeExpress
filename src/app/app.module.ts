import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenProductoPipe } from './pipe/imagen-producto.pipe';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { VisualizarProductoComponent } from './visualizar-producto/visualizar-producto.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ProductosRecomendadosComponent } from './pagina-inicio/productos-recomendados/productos-recomendados.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PagoComponent } from './pago/pago.component';
import { CrearPymeComponent } from './crear-pyme/crear-pyme.component';
import { CrearRepartidorComponent } from './crear-repartidor/crear-repartidor.component';
import { ListarRepartosComponent } from './listar-repartos/listar-repartos.component';
import { BuscarOrdenComponent } from './buscar-orden/buscar-orden.component';
import { HistorialVentasComponent } from './historial-ventas/historial-ventas.component';

import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GondolaProductosComponent,
    FooterComponent,
    CarritoComponent,
    ProductoComponent,
    InicioSesionComponent,
    RegistroComponent,
    ImagenProductoPipe,
    ListarProductosComponent,
    FiltroProductosComponent,
    CrearProductoComponent,
    VisualizarProductoComponent,
    PaginaInicioComponent,
    ProductosRecomendadosComponent,
    CrearPymeComponent,
    CrearRepartidorComponent,
    ListarRepartosComponent,
    BuscarOrdenComponent,
    PagoComponent,
    CrearPymeComponent,
    HistorialCompraComponent,
    HistorialVentasComponent
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
    ModalModule.forRoot(),
    NgxSliderModule,
    ReactiveFormsModule,
    MultiSelectModule,
    SliderModule,
    PaginatorModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
