import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('name') productName: string = '';
  @Input('price') productPrice?: number;
  @Input('discount') productDiscount?: any;
  @Input('image') productImage?: string = '';


  prePrice?: number = this.productPrice;
  price?: number = this.calcPrice(this.productPrice, this.productDiscount);
  name = this.productName;
  formerPrice = this.productPrice;
  discount?: string = `${this.productDiscount}$`;
  imageURL = `/assets/images/homepage/products/${this.productImage}.png`;


    private calcPrice(productPrice: any, productDiscount: any): number {
      if(productDiscount == 0) {
        productDiscount = 100;
      }

      let curPrice: number = (productPrice * (productDiscount / 100));

      return curPrice;

    }

}
