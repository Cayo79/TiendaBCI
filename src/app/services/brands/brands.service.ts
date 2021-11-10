import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brandsInfo: Brands[] = [];
  constructor( private http: HttpClient) { 
    this.getBrands();
  }

  public getBrands() {
    this.http
      .get(`${environment.servicios.obtenerBrands}`)
      .toPromise()
      .then((response: any) => {
        this.brandsInfo = response;
      });
  }
}
