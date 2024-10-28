import { Component } from '@angular/core';
import { Product } from '../Product';


@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
// export class Reactive2Component {
//   product:Product = new Product(0,'','',0,0);
//   onSubmit(){
//     console.warn(this.product);
//   }
export class Reactive2Component {
  // product:Product= new Product(0,'','',0,0);
  // onSubmit()
  // {
  //   console.warn(this.product);
  // }
  product: Product = new Product(0, '', '', 0, 0);
  submittedProduct?: Product;

  onSubmit() {
    // Store a copy of the product data to display after submission
    this.submittedProduct = { ...this.product };
    console.warn(this.product);
  }

}
