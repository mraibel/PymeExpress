import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PymesService {

  private apiUrl = environment.apiUrl;
  public pymes: any[] = []

  constructor(private http: HttpClient) { }

  crearPyme(pyme: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pymes/`, pyme);
  }

  getPymes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pymes/`).pipe(
      map((res: any) => {
        this.pymes = res
        return res
      })
    )
  }
}
