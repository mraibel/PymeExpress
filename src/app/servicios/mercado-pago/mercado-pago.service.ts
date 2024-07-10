import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  pagar(productos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mercadoPago/crearPreferencia/`, productos);
  }
}
