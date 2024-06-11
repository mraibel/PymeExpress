import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  private apiUrl = `${environment.apiUrl}/repartidores`;

  constructor(private http: HttpClient) { }

  getRepartidores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
