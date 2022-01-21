import { Component, OnInit } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faShieldAlt, faShippingFast, faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardPay = faCreditCard;
  shield = faShieldAlt;
  shipping = faShippingFast;
  shirt = faTshirt;

}
