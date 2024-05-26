import { Injectable } from '@angular/core';
import { IProduct } from './productos'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() {}

  getProductoId(id: number ): IProduct | undefined{
    return this.getProductos().find(e=> e.id_producto == id)
  }

  getProductos() : IProduct[] {
    return [
      {
        id_producto: 1,
        nombre: "Producto 1",
        cantidad: 10,
        descripcion: "Descripción del producto 1",
        precio: 10.99,
        imagen: "../../assets/images.png",
        categoria: "Electrónica"
      },
      {
        id_producto: 2,
        nombre: "Producto 2",
        cantidad: 15,
        descripcion: "Descripción del producto 2",
        precio: 15.99,
        imagen: "../../assets/images.png",
        categoria: "Ropa"
      },
      {
        id_producto: 3,
        nombre: "Producto 3",
        cantidad: 20,
        descripcion: "Descripción del producto 3",
        precio: 20.99,
        imagen: "../../assets/images.png",
        categoria: "Hogar"
      },
      {
        id_producto: 4,
        nombre: "Producto 4",
        cantidad: 12,
        descripcion: "Descripción del producto 4",
        precio: 25.99,
        imagen: "../../assets/images.png",
        categoria: "Electrodomésticos"
      },
      {
        id_producto: 5,
        nombre: "Producto 5",
        cantidad: 8,
        descripcion: "Descripción del producto 5",
        precio: 12.49,
        imagen: "../../assets/images.png",
        categoria: "Juguetes"
      },
      {
        id_producto: 6,
        nombre: "Producto 6",
        cantidad: 18,
        descripcion: "Descripción del producto 6",
        precio: 18.99,
        imagen: "../../assets/images.png",
        categoria: "Electrónica"
      },
      {
        id_producto: 7,
        nombre: "Producto 7",
        cantidad: 25,
        descripcion: "Descripción del producto 7",
        precio: 30.99,
        imagen: "../../assets/images.png",
        categoria: "Hogar"
      },
      {
        id_producto: 8,
        nombre: "Producto 8",
        cantidad: 30,
        descripcion: "Descripción del producto 8",
        precio: 22.99,
        imagen: "../../assets/images.png",
        categoria: "Ropa"
      },
      {
        id_producto: 9,
        nombre: "Producto 9",
        cantidad: 14,
        descripcion: "Descripción del producto 9",
        precio: 27.99,
        imagen: "../../assets/images.png",
        categoria: "Electrodomésticos"
      },
      {
        id_producto: 10,
        nombre: "Producto 10",
        cantidad: 22,
        descripcion: "Descripción del producto 10",
        precio: 35.99,
        imagen: "../../assets/images.png",
        categoria: "Hogar"
      },
      {
        id_producto: 11,
        nombre: "Producto 11",
        cantidad: 17,
        descripcion: "Descripción del producto 11",
        precio: 19.99,
        imagen: "../../assets/images.png",
        categoria: "Ropa"
      },
      {
        id_producto: 12,
        nombre: "Producto 12",
        cantidad: 9,
        descripcion: "Descripción del producto 12",
        precio: 16.99,
        imagen: "../../assets/images.png",
        categoria: "Juguetes"
      },
      {
        id_producto: 13,
        nombre: "Producto 13",
        cantidad: 16,
        descripcion: "Descripción del producto 13",
        precio: 23.99,
        imagen: "../../assets/images.png",
        categoria: "Electrónica"
      },
      {
        id_producto: 14,
        nombre: "Producto 14",
        cantidad: 11,
        descripcion: "Descripción del producto 14",
        precio: 29.99,
        imagen: "../../assets/images.png",
        categoria: "Hogar"
      },
      {
        id_producto: 15,
        nombre: "Producto 15",
        cantidad: 13,
        descripcion: "Descripción del producto 15",
        precio: 17.99,
        imagen: "../../assets/images.png",
        categoria: "Ropa"
      },
      {
        id_producto: 16,
        nombre: "Producto 16",
        cantidad: 28,
        descripcion: "Descripción del producto 16",
        precio: 24.99,
        imagen: "../../assets/images.png",
        categoria: "Electrodomésticos"
      },
      {
        id_producto: 17,
        nombre: "Producto 17",
        cantidad: 21,
        descripcion: "Descripción del producto 17",
        precio: 32.99,
        imagen: "../../assets/images.png",
        categoria: "Hogar"
      },
      {
        id_producto: 18,
        nombre: "Producto 18",
        cantidad: 19,
        descripcion: "Descripción del producto 18",
        precio: 28.99,
        imagen: "../../assets/images.png",
        categoria: "Ropa"
      },
      {
        id_producto: 19,
        nombre: "Producto 19",
        cantidad: 23,
        descripcion: "Descripción del producto 19",
        precio: 21.99,
        imagen: "../../assets/images.png",
        categoria: "Electrónica"
      },
      {
        id_producto: 20,
        nombre: "Producto 20",
        cantidad: 26,
        descripcion: "Descripción del producto 20",
        precio: 37.99,
        imagen: "../../assets/images.png",
        categoria: "Juguetes"
      }
    ]
  }
}
