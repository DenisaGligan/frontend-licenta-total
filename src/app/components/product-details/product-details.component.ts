import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  message = '';
  submitted = false;
  notSumbitted = false;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(){
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id){
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateProduct(){
    this.productService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response =>{
          console.log(response);
          this.message = 'The product was updated successfully!';
          this.submitted = true;
          this.notSumbitted = false;
        },
        err => {
          console.log(err);
          this.submitted = false;
          this.notSumbitted = true;
          this.message = err.error.message;
        });
  }

  deleteProduct(){
    this.productService.delete(this.currentProduct.id)
      .subscribe(
        response =>{
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        }
      );
  }

  goBack(){
    this.location.back();
  }
  

}
