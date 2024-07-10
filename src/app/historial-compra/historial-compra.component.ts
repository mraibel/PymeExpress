import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrl: './historial-compra.component.css'
})
export class HistorialCompraComponent {

  compras: any[] = [
    {
      nombreProducto: 'Smartphone Samsung Galaxy A52',
      codigoCompra: 'HWEI-123',
      fechaCompra: '2024-6-12 12:01',
      id: 1,
      producto: {
        descripcion: 'Teléfono inteligente con pantalla AMOLED de 6.5", cámara cuádruple de 64 MP, 6 GB de RAM y 128 GB de almacenamiento.',
        imagen: '../../assets/box.png',
      }
    },
    {
      nombreProducto: 'PlayStation 5',
      codigoCompra: 'JHWE-132',
      fechaCompra: '2024-4-03 18:12',
      id: 2,
      producto: {
        descripcion: 'Consola de videojuegos de última generación con capacidad de reproducción de juegos en 4K.',
        imagen: '../../assets/box.png',
      }
    },
    {
      nombreProducto: 'Chaqueta insana',
      codigoCompra: 'DWEI-321',
      fechaCompra: '2024-2-8 16:23',
      id: 3,
      producto: {
        descripcion: 'Chaqueta ligera y resistente al agua, ideal para actividades al aire libre como trekking o senderismo.',
        imagen: '../../assets/box.png'
      }
    },
    {
      nombreProducto: 'Juego de Mesa Monopoly',
      codigoCompra: 'ARJ2-928',
      fechaCompra: '2023-5-1 14:01',
      id: 4,
      producto: {
        descripcion: 'Clásico juego de mesa de negociación y estrategia donde puedes comprar, vender y comerciar propiedades.',
        imagen: '../../assets/box.png',
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
