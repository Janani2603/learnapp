import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  productId:number=1010
  desc:string="phone"
  brand:string="Apple"
  price:number=15000.00
  Isavailable:boolean=true 
  orderedQty:number=0
  availqty:number=100
  isMember:boolean=true
  isButtonEnabled:boolean=this.orderedQty>0?true:false
  freeshipping:string=this.price<10000?'red':'green'
  products:any[]=[
    {"productId":101,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"green"},
    {"productId":102,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"green"},
    {"productId":103,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"red"},
    {"productId":104,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"green"},
    {"productId":105,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"red"},
    {"productId":106,"desc":"foldable","brand":"samsung","availqty":200,"price":15000,"freeshipping":"green"}
  ]
  products2:Product[]=[];
  constructor(private service:DataService){

  }
  ngOnInit():void{
    this.getProducts();
  }
  public getProducts():void{
    this.products2=this.service.getProduct();
  }
  
  public placeOrder():void{
    if(this.orderedQty<this.availqty){
      this.Isavailable=true
    }
    else
    this.Isavailable=false

    console.log("order received",this.orderedQty);
  }
  
}