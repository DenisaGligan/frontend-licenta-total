import {Component, OnInit} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs/internal/Subscription";
import {EcommerceService} from "../services/EcommerceService";
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;

    submitted = false;
    notSubmitted =false;
    hasErr = false;
    errMessage = '';
    currentUser;

    myForm: FormGroup;

    constructor(private ecommerceService: EcommerceService, private tokenStorage: TokenStorageService,private location: Location,private route: ActivatedRoute,
        private router: Router,private formBuilder: FormBuilder) {
        this.orders = this.ecommerceService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });

        this.loadTotal();

        this.myForm = this.formBuilder.group({
            adress: ['', Validators.required],
            telephone: ['',[ Validators.required, Validators.minLength(10)]]
          });
    }

    pay() {
        if (this.myForm.valid){

            this.hasErr = false;
            const data2 = this.myForm.getRawValue();

            this.paid = true;
            this.currentUser = this.tokenStorage.getUser();
            this.orders.user_id = this.currentUser.id;
            this.orders.adress = this.myForm.get('adress').value;
            this.orders.telephone = this.myForm.get('telephone').value;
            console.log(this.orders.adress);
            console.log(this.orders.telephone);
            console.log(this.orders.user_id);
            this.ecommerceService.saveOrder(this.orders).subscribe(
                response => {
                    console.log(response);
                    this.submitted = true;
                    this.notSubmitted =false;},
            err => {
                    this.submitted = false;
                    this.notSubmitted =true;
                    this.errMessage = err.error.message;
                console.log(err);
            });
        }
        else  {
            console.log(this.myForm.errors);
            this.hasErr = true;
      
          }
    }

    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.total = this.ecommerceService.Total;
        });
    }
    goBack(){
       // window.history.back(); 
    this.paid = false;     }
      
}