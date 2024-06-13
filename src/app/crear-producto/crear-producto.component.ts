import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  formData = {
    nombre: '',
    stock: '',
    fotos: '',
    precio: '',
    carcateristicasPrincipales: '',
    categoria: '',
    formasDePago: '',
    descripcion: ''
  };

  constructor(private http: HttpClient) {}

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
}
