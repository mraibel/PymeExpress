import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrl: './historial-compra.component.css'
})
export class HistorialCompraComponent {

  compras: any[] = [
    {
      nombreProducto: 'Sarten de aluminio',
      codigoCompra: 'HWEI-123',
      fechaCompra: '2024-6-12 12:01',
      id: 1,
      producto: {
        descripcion: 'Producto A',
        imagen: '../../assets/box.png',
      }
    },
    {
      nombreProducto: 'PlayStation 5',
      codigoCompra: 'JHWE-132',
      fechaCompra: '2024-4-03 18:12',
      id: 2,
      producto: {
        descripcion: 'Producto B',
        imagen: '../../assets/box.png',
      }
    },
    {
      nombreProducto: 'Laptop HP',
      codigoCompra: 'DWEI-321',
      fechaCompra: '2024-2-8 16:23',
      id: 3,
      producto: {
        descripcion: 'Producto C',
        imagen: '../../assets/box.png'
      }
    },
    {
      nombreProducto: 'Escoba de plastico',
      codigoCompra: 'ARJ2-928',
      fechaCompra: '2023-5-1 14:01',
      id: 4,
      producto: {
        descripcion: 'Producto D',
        imagen: '../../assets/box.png',
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
