import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface FormData {
  nombre: string;
  stock: string;
  fotos: string;
  precio: string;
  carcateristicasPrincipales: string;
  categoria: string;
  formasDePago: string;
  descripcion: string;
}

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  items = [
    { title: 'Nombre', content: '' },
    { title: 'Stock', content: '' },
    { title: 'Fotos', content: '' },
    { title: 'Precio', content: '' },
    { title: 'Caracteristicas Principales', content: '' },
    { title: 'Categoria', content: '' },
    { title: 'Formas de pago', content: '' },
    { title: 'Descripción', content: '' }
  ];

  formData: FormData = {
    nombre: '',
    stock: '',
    fotos: '',
    precio: '',
    carcateristicasPrincipales: '',
    categoria: '',
    formasDePago: '',
    descripcion: ''
  };

  producto : any;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private serviceProduct: ProductosService,
    private auth: AutenticacionService
  ) {}

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formData.fotos = reader.result as string;
      };
    }
  }

  generarDescripcion() {
    this.http.post('http://127.0.0.1:3000/api/description/generate-description', this.formData).subscribe((response: any) => {
      this.formData.descripcion = response.description;
    });
  }

  crearProducto() {
    // Validar que todos los campos no estén vacíos
    const campos: Array<keyof FormData> = ['nombre', 'stock', 'precio', 'carcateristicasPrincipales', 'categoria', 'formasDePago', 'descripcion'];
    for (const campo of campos) {
      if (!this.formData[campo]) {
        alert(`Por favor, complete el campo ${campo}`);
        return;
      }
    }

    this.producto = this.formularProducto();
    this.serviceProduct.crearProducto(this.producto).pipe(
      tap((response: any) => {
        alert('Producto creado exitosamente');
        this.router.navigate(['/productos-pyme/'+this.producto.id_vendedor]); 
      }),
      catchError((error) => {
        console.error('Error al crear el producto', error);
        alert('Hubo un error al crear el producto. Por favor, inténtelo de nuevo.');
        return of(null);
      })
    ).subscribe();
  }

  formularProducto(): any {
    let producto = {
      nombre: this.formData.nombre,
      cantidad: this.formData.stock,
      descripcion: this.formData.descripcion,
      precio: this.formData.precio,
      imagen: null,
      categoria: this.formData.categoria,
      id_vendedor: this.auth.getUsuario().id_usuario, 
      activo: true
    };
    return producto;
  }

}
