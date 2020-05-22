import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce/services/EcommerceService';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders: any;

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.retrieveProducts();
  }
  retrieveProducts(){
    this.ecommerceService.getAllOrders().subscribe(
      data => { 
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);

      });
  }

}
