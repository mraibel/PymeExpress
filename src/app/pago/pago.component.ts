
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';

import { MercadoPagoService } from '../servicios/mercado-pago/mercado-pago.service';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from '../servicios/productos.service';
import { PedidosService } from '../servicios/pedidos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare var MercadoPago: any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit{

  metodoPago: any
  especificaiones: string = ''
  cupon: string = '';

  //Ventana modal
  modalRef?: BsModalRef;
  @ViewChild('pagoExitoso') pagoExitoso?: TemplateRef<any>;

  //oden de compra
  public orden :any
  public productosOrden: any[] = []

  constructor(
    public carritoServicio: CarritoService,
    private router: Router,
    private authService: AutenticacionService,
    private mercadoPagoServicio: MercadoPagoService,
    private productosServicio: ProductosService,
    private pedidosServicio: PedidosService,
    private modalService: BsModalService,
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
  estaAutenticado(): boolean {
    return this.authService.getToken() !== null; 
  }

  aplicarCupon(): void {
    this.carritoServicio.aplicarDescuento(this.cupon);
  }

  obtenerTotal(): number {
    return this.carritoServicio.obtenerTotal();
  }

  obtenerProductos(): any[] {
    return this.carritoServicio.obtenerProductos();
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
          this.pedidosServicio.crearPedido(this.crearOrdenDeCompra()).subscribe((data: any) => {
            this.orden = data.pedido
            this.productosOrden = data.productosPedido
            if(this.pagoExitoso) {
              this.abrirVentanaModal(this.pagoExitoso)
            }
            this.carritoServicio.limpiarCarroPostCompra()
          })
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
      producto[0].cantidad = nuevaCantidad
      this.productosServicio.actualizarCantidad(producto[0].id_producto, producto[0].cantidad).subscribe(()=> {
        console.log(`Producto ${producto[0].id_producto} actualizado`);
      }, error => {
        console.error('Error al actualizar la existencia', error);
      })
    })
  }

  crearOrdenDeCompra() {
    const productosOrden = this.carritoServicio.obtenerProductos()
    const especificacionesOrden = this.especificaiones
    const totalOrden = this.carritoServicio.obtenerTotal()
    const idCliente = this.authService.getId()
    const orden = {
      especificaciones: especificacionesOrden,
      precio: totalOrden,
      estado: true,
      productos: productosOrden,
      id_usuario: idCliente
    }
    return orden
  }

  abrirVentanaModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, keyboard: false })
  }

  cerrarVentanaModal(ruta: any): Promise<void> {
    return new Promise((resolve) => {
      if(this.modalRef) {
        this.modalRef.hide()
        resolve()
        this.router.navigate([ruta])
      } else {
        resolve()
      }
    })
  }
}
