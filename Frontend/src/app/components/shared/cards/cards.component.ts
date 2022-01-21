import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    this.prePrice = this.productPrice;
    this.price = this.calcPrice(this.productPrice, this.productDiscount);
    this.formerPrice = this.productPrice;
    this.name = this.productName;
    this.discount = `${this.productDiscount}%` 
    this.imageURL = `/assets/images/homepage/products/${this.productImage}`;
  }

  @Input() productName?: string;
  @Input() productPrice?: number;
  @Input() productDiscount?: any;
  @Input() productImage?: string = '';


  prePrice?: number ;
  price?: number;
  name?: string;
  formerPrice?: number;
  discount?: string;
  imageURL?: string;

  private calcPrice(productPrice: any, productDiscount: any): number {

    if (productDiscount == 0) {
      return productPrice;

    }

    let curPrice: number = productPrice - (productPrice * (productDiscount / 100));

    return curPrice;

  }

}
