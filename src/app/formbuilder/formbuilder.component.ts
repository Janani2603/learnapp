import { Component } from '@angular/core';
import { FormArray,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
  constructor(private formBuilder:FormBuilder){}
  productForm=this.formBuilder.group({ //seems like its a class having instance variables
    productId:[0,[Validators.required,Validators.minLength(8)]],//0 is the initial val
    brand:[''],
    description:this.formBuilder.group({
      age:[''],
      seasons:[''],
    }),
    qty:[0],
    price:[0],
    suppliers:this.formBuilder.array([this.formBuilder.control('')]), //instantiate dynamic controller
  });
  onSubmit(){
    console.log(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['productId'].value);
    //console.log(this.productForm.get('brand').value);
    console.log(this.productForm.controls['description'].controls['age'].value);
    console.log(this.productForm.controls['suppliers'].controls[0].value);
    //this.product.productId=this.productForm.controls['productId'].value!;
    //console.log('from product',this.productForm.productId);

  }
  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }
  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }

}
//product form is isnarnce of form builder...
