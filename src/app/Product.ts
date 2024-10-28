// export class Product{
//     productId:number;
//     description:string;
//     brand:string;
//     qty:number;
//     price:number;
//     constructor(productId:number,desc:string,brand:string,availqty:number,price:number){
//         this.productId=productId;
//         this.description=desc;
//         this.brand=brand;
//         this.qty=availqty;
//         this.price=price;
//     }
   
// }
export class Product {
    productId: number;
    description: string;
    brand: string;
    qty: number;
    price: number;
  
    constructor(productId: number, desc: string, brand: string, availqty: number, price: number) {
        this.productId = productId;
        this.description = desc;
        this.brand = brand;
        this.qty = availqty;
        this.price = price;
    }
  }