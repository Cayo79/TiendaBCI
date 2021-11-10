import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { BrandsService } from 'src/app/services/brands/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  @Input() aboutInfo: About = new About();
  
  constructor( public brandService: BrandsService ) { }

  ngOnInit(): void {
  }

}
