import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-banner',
  templateUrl: './newsletter-banner.component.html',
  styleUrls: ['./newsletter-banner.component.scss']
})
export class NewsletterBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image = `url("/assets/images/homepage/Banner/banner1.png")`

}
