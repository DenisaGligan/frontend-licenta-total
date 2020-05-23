import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce/services/EcommerceService';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: any;
  currentUser;
  dateCreated;

  constructor(private ecommerceService: EcommerceService, private tokenStorage: TokenStorageService) {
    this.currentUser = tokenStorage.getUser();   }

  ngOnInit() {
    this.retrieveProducts();
  }
  retrieveProducts(){
    this.ecommerceService.getAllOrdersById(this.currentUser.id).subscribe(
      data => { 
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);

      });
  }


}
