import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.retrieveProducts();
  }

  retrieveProducts(){
    this.productService.getAll().subscribe(
      data => { 
        this.products = data;
        console.log(data);
      },
      error => {
        console.log(error);

      });
  }

  refreshList() {
    this.retrieveProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setActiveProduct(product, index) {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  searchName() {
    this.productService.findByName(this.name)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
