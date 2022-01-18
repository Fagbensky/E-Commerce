import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faShieldAlt, faShippingFast, faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  smile = faSmile;
  shield = faShieldAlt;
  shipping = faShippingFast;

  arrowRight = faArrowRight;
  arrowLeft = faArrowLeft;

}
