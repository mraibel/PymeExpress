import { Component } from '@angular/core';
import { HuggingfaceService } from '../../services/huggingface.service';

@Component({
  selector: 'app-descripcion-productos',
  templateUrl: './descripcion-productos.component.html',
  styleUrls: ['./descripcion-productos.component.css']
})
export class DescripcionProductosComponent {
  productName = '';
  productDetails = '';
  generatedDescription = '';

  constructor(private huggingfaceService: HuggingfaceService) { }

  async generateProductDescription() {
    if (this.productName && this.productDetails) {
      try {
        this.generatedDescription = await this.huggingfaceService.generateDescription(this.productName, this.productDetails);
      } catch (error) {
        console.error('Error generating product description:', error);
        this.generatedDescription = 'Error generating description. Please try again later.';
      }
    } else {
      this.generatedDescription = 'Por favor, complete todos los campos antes de generar una descripción.';
    }
  }
}

