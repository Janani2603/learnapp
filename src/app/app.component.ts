import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnapp';
  x:number=10;
  y:number=20;

  public product():number{
    return this.x*this.y;
  }
  public fact(n:number):number{
    if(n==1){
      return 1;
    }
    return this.fact(n-1)*n;
  
  }
}
