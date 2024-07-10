
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';

import { MercadoPagoService } from '../servicios/mercado-pago/mercado-pago.service';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../servicios/productos.service';
declare var MercadoPago: any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit{

  metodoPago: any

  constructor(
    public carritoServicio: CarritoService,
    private router: Router,
    private authService: AutenticacionService,
    private mercadoPagoServicio: MercadoPagoService,
    private toastr: ToastrService,
    private productosServicio: ProductosService
  ) { }

  ngOnInit() {
    this.mercadoPagoServicio.pagar(this.setProductosAComprar()).subscribe((data: any)=> {
      const mp = new MercadoPago('TEST-a316ff69-d0a2-44e7-a34f-e02da588cc6d', {
        locale: 'es-CL'
      });
      const bricksBuilder = mp.bricks()
      this.createCheckoutButton(data.id, bricksBuilder)
    })
  }

  setProductosAComprar(): any[] {
    const orden: any[] = []
    let productoEnOrden = {}
    if(this.carritoServicio.obtenerProductos()) {
      this.carritoServicio.obtenerProductos().forEach((productoCarrito) => {
        productoEnOrden = {
          id: productoCarrito[0].producto_id,
          title: productoCarrito[0].nombre,
          quantity: productoCarrito[1],
          unit_price: productoCarrito[0].precio
        }
        orden.push(productoEnOrden)
      })
    }
    return orden
  }

  aplicarCupon() {
    // Implementar la lógica para aplicar el cupón
  }

  estaAutenticado(): boolean {
    return this.authService.getToken() !== null; 
  }

  async createCheckoutButton(id:any, bricks: any) {
    const settings = {
      initialization: {
        amount: this.carritoServicio.obtenerTotal(),
        preferenceId: id,
        payer: {
          firstName: this.authService.getUsuario().nombre,
          lastName: this.authService.getUsuario().apellido1,
          email: this.authService.getUsuario().correo,
        },
      },
      customization: {
        visual: {
          style: {
            theme: "default",
          },
        },
        paymentMethods: {
          creditCard: "all",
                  debitCard: "all",
                  ticket: "all",
                  bankTransfer: "all",
                  atm: "all",
                  onboarding_credits: "all",
                  wallet_purchase: "all",
          maxInstallments: 1
        },
      },
      callbacks: {
        onSubmit: (data:any) => {
          this.actualizarStock()
          this.toastr.success('Pago realizado con éxito, redirigiendo...') 
          this.router.navigate(['/productos'])
        },
        onReady: () => {
          console.log('ready')
        },
        onError: (error: any) => {
          console.error(error);
        },
      }
    }

      await bricks.create(
        "payment",
        "paymentBrick_container",
      settings
    )
  }

  actualizarStock(): void {
    const productos = this.carritoServicio.obtenerProductos()
    let cantidadComprada
    let nuevaCantidad
    productos.forEach(producto => {
      cantidadComprada = producto[1]
      nuevaCantidad = producto[0].cantidad - cantidadComprada
      this.productosServicio.actualizarCantidad(producto[0].id_producto, nuevaCantidad)
    })
  }
}
