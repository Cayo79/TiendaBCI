import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  disponibles: Products[] = [];
  estrellas: number[] = [1,2,3,4,5];

  constructor( private servicioProductos: ProductsService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.servicioProductos.getProducts()
      .subscribe((resp) => {
        this.disponibles = resp;
      });
  }
}
