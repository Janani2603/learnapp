import { Component } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  orderno:number=1;
  type: string[]=['espresso','latte','cappuccino'];
  price: number = 250;
  coffeetype:string='';
  checkavail(){

  }

}
