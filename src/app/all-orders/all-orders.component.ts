import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce/services/EcommerceService';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders: any;
  currentOrder = null;
  currentIndex = -1;
  message = '';
  status;
  id;
  submitted = false;
  notSumbitted = false;

 
  constructor(private ecommerceService: EcommerceService) {

   }

  ngOnInit() {
    this.retrieveOrders();
  }
  retrieveOrders(){
    this.ecommerceService.getAllOrders().subscribe(
      data => { 
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);

      });
  }

  refreshList() {
    this.ecommerceService.getAllOrders().subscribe();
    this.retrieveOrders();
    this.currentOrder = null;
    this.currentIndex = -1;
  }

  setActiveOrder(order, index) {
    this.currentOrder = order;
    this.currentIndex = index;
  }
  updateOrder(){
    this.ecommerceService.updateOrderStatus(this.currentOrder.id, this.currentOrder)
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
    
    this.refreshList();
  }
}
