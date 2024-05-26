import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HuggingfaceService {

  private apiUrl = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3';
  private apiKey = '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'; // Reemplaza con tu API Key

  constructor() { }

  async generateDescription(productName: string, productDetails: string): Promise<string> {
    const prompt = `Genera una descripción de marketing en español para un producto llamado "${productName}" con los siguientes detalles: ${productDetails}. La descripción debe ser atractiva y persuasiva, resaltando las características y beneficios del producto para atraer a los clientes.`;

    try {
      const response = await axios.post(this.apiUrl, {
        inputs: prompt
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });

      console.log(response.data)
      return response.data[0].generated_text.trim();
    } catch (error) {
      console.error('Error generating description:', error);
      throw new Error('Error generating description');
    }
  }
}

