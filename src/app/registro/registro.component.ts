import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nombre: string = ''
  apellido1: string = ''
  apellido2: string = ''
  correo: string = '';
  password: string = '';
  confirmarPassword: string = '';
  telefono: number = 0
  direccion: string = ''

  enviar(): void {
    // Aquí iría la lógica de registro, por ejemplo, llamando a un servicio
    console.log('Nombre:', this.confirmarPassword);
    console.log('Apellido Paterno:', this.confirmarPassword);
    console.log('Apellido Materno:', this.confirmarPassword);
    console.log('Correo Electrónico:', this.correo);
    console.log('Contraseña:', this.password);
    console.log('Confirmar Contraseña:', this.confirmarPassword);
    console.log('Nro. Celular:', this.confirmarPassword);
    console.log('Dirección:', this.confirmarPassword);
    
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  }
}
