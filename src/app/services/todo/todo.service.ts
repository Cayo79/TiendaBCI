import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any[]>(`${environment.servicios.serverBackend}` + 'producto/listar');
  }

  getTodo(id: number) {
    return this.http.get<any[]>(`${environment.servicios.serverBackend}` + 'producto/listar/${id}');
  }
}
