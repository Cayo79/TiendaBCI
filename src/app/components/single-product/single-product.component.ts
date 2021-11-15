import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Products } from 'src/app/models/products'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  prodInfo: Products = new Products();
  estrellas: number[] = [1,2,3,4,5];
  slides: number = 1;

  constructor(private servicioProductos: ProductsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProd();
  }

  cargarProd() {
    this.activateRoute.params.subscribe(
      params => {
        this.servicioProductos.getProd(params.idProd).subscribe((resp) => {
          this.prodInfo = resp;
          this.slides = Math.ceil(this.prodInfo.miniaturas.length / 3) - 1;
      });
      }
    )
    
  }
}
