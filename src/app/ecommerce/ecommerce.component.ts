import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  private collapsed = true;
    orderFinished = false;
    filterVisible=false;
    name;

    myForm: FormGroup;
    
    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
      this.myForm = this.formBuilder.group({
        productType: ['']});
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;     
    }

    onClickSubmit(filterVisible: boolean) {
      this.filterVisible = filterVisible;    
    }

    getAllByType(){
      let type=this.myForm.get('productType').value;
      this.productsC.getAllByType(type);

    }

    goBack(){
      this.orderFinished = false;
      this.reset();
    }

    checkInput(){
      let type=this.myForm.get('productType').value;
      console.log('checkInp')
      if (type=='')
      this.productsC.loadProducts();
    }
    
    reset() {
      this.filterVisible = false;
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        //this.filtersC.reset();
        this.ordersC.paid = false;
    }

}
