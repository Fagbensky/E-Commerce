import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook = faFacebookF;
  twitter = faTwitter;
  linkedIn = faLinkedinIn;
  insta = faInstagram;
  youtube = faYoutube;

}
