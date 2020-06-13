import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    type: '',
    name: '',
    price: null,
    imgUrl: '',
    description: ''
  };
  submitted = false;
  notSubmitted =false;
  hasErr = false;
  errMessage = '';

  myForm: FormGroup;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.myForm = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      price: [null,[ Validators.required, Validators.min(1)]],
      imgUrl: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]]

    });
  }

  saveProduct(){

    if (this.myForm.valid){

      this.hasErr = false;

      /*const data = {
      type: this.product.type,
      name: this.product.name,
      price: this.product.price,
      imgUrl: this.product.imgUrl
      };*/

      const data2 = this.myForm.getRawValue();

      //console.log('save product', data2);

      this.productService.create(data2)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.notSubmitted =false;
        },
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

  newProduct(){
    this.submitted = false;
    /*this.product = {
      type: '',
      name: '',
      price: 0,
      imgUrl: ''
    };*/
  

  this.myForm.reset();
  }

}
