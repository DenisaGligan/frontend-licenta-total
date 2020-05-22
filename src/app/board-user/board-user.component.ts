import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  name;
  products: any;

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
