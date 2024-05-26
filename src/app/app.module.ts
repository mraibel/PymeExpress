import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './header/header.component';
import { GondolaProductosComponent } from './gondola-productos/gondola-productos.component';
import { FooterComponent } from './footer/footer.component';
import { DescripcionProductosComponent } from './descripcion/descripcion-productos/descripcion-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GondolaProductosComponent,
    FooterComponent,
    DescripcionProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
