import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  products: any;

  name;
  constructor( private productService: ProductsService) { }

  ngOnInit() {
    this.retrieveFruits();
  }

  retrieveFruits(){
    this.productService.getFruits()
    .subscribe(
      data => {
        this.products = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
