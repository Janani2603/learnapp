import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  products:Product[]=[];
  product:Product=new Product(0,'','',0,0);
  constructor(private service:DataService){

  }
  ngOnInit(): void {
    this.addprod();
    this.deleteprod(104);
    this.fetchallprod();
    this.updateprod();
  }
  fetchallprod(): void {
     this.service.fetchAllProduct().subscribe( (data)=>{
      this.products=data;
     } );
  }
  addprod():void{
    this.service.addProduct(new Product(104,'book','comic',10,2500)).subscribe((data)=>{
      this.product=data;
    });
    
  }
  deleteprod(productId: number): void {
    this.service.deleteprod(104).subscribe((data)=>{
      this.product=data;
    });
    console.log("product deleted")
  }
  updateprod(): void {
    this.service.addProduct(new Product(105,'bookmark','comic',11,2300)).subscribe((data)=>{
      this.product=data;
    });
  }

}
