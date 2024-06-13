import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizar-producto',
  templateUrl: './visualizar-producto.component.html',
  styleUrls: ['./visualizar-producto.component.css']
})
export class VisualizarProductoComponent {
  @Input() formData: any;

}
