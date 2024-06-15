import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getRolesUsuario(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles/usuario/${id}`).pipe(map((data:any) => data))
  }
}
