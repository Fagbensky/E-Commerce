import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from 'src/app/services/auth-route.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  public loggedIn ?: boolean;
  
  constructor(
    private authRoute: AuthRouteService,
    private router: Router,
    private token: TokenService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.authRoute.authStatus.subscribe(
      value => this.loggedIn = value
    )
  }

  logOut(event: MouseEvent){
    event.preventDefault();
    this.auth.logout();
    this.token.remove();
    this.authRoute.changeAuthStatus(false);
    this.router.navigateByUrl('/')
  }
}
