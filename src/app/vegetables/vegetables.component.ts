import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  products: any;
  name;
  constructor(private productService: ProductsService) { }


  ngOnInit(){
    this.retrieveVegetables();
  }

  
  retrieveVegetables(){
    this.productService.getVegetables()
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
