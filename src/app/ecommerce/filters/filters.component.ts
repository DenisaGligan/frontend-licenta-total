import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/_services/products.service';
import { Product } from 'src/app/ecommerce/models/product.model';
import { ProductOrder } from 'src/app/ecommerce/models/product-order.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  type: string;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private productService: ProductsService) { }

  ngOnInit(){
    this.myForm = this.formBuilder.group({
      productType: ['']});
  }
  

  getAllByType(){
    this.type = this.myForm.get('productType').value;
    const data2 = this.myForm.getRawValue();
    console.log(data2);
    console.log(this.type);
    this.productService.getByType(this.type)
    .subscribe(
        (products: any[]) => {
            this.products = products;
            this.products.forEach(product => {
                this.productOrders.push(new ProductOrder(product, 0));
            })
        },
        (error) => console.log(error)
    );

  }

}
