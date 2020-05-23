import { Component, OnInit } from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";
import { ProductsService } from 'src/app/_services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;
  name;
  type: string;
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ecommerceService: EcommerceService, private productService: ProductsService) {
  }

  ngOnInit() {
      this.productOrders = [];
      this.loadProducts();
      this.loadOrders();
      this.myForm = this.formBuilder.group({
        productType: ['']});
  }

  addToCart(order: ProductOrder) {
      this.ecommerceService.SelectedProductOrder = order;
      this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
      this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
      let index = this.getProductIndex(productOrder.product);
      if (index > -1) {
          this.shoppingCartOrders.productOrders.splice(
              this.getProductIndex(productOrder.product), 1);
      }
      this.ecommerceService.ProductOrders = this.shoppingCartOrders;
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
      this.productSelected = false;
  }

  getProductIndex(product: Product): number {
      return this.ecommerceService.ProductOrders.productOrders.findIndex(
          value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
      return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
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

  loadOrders() {
      this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
          this.shoppingCartOrders = this.ecommerceService.ProductOrders;
      });
  }

  reset() {
      this.productOrders = [];
      this.loadProducts();
      this.ecommerceService.ProductOrders.productOrders = [];
      this.loadOrders();
      this.productSelected = false;
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
