import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from 'src/app/models/products';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<any> {
    return this.http.get<Products[]>( `${environment.servicios.obtenerProductosTodos}`).pipe(
      catchError (e => {
        if (e.status === 0 || e.status === 500) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getProd(idProd: number): Observable<any> {
    return this.http.get<Products>( `${environment.servicios.obtenerProducto}`+ idProd + '.json').pipe(
      catchError (e => {
        if (e.status === 0 || e.status === 500) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}
