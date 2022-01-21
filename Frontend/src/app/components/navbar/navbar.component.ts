import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from 'src/app/services/login/auth-route.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenService } from 'src/app/services/login/token.service';
import { faShoppingCart, faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  shoppingCart = faShoppingCart;
  bars = faBars;
  user = faUser;
  search = faSearch;


  public loggedIn?: boolean;
  public showSearchBar: boolean = false;
  @ViewChild('searchBar') searchBar:any;
  
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

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
    if (this.showSearchBar)
      // use setTimeout to allow *ngIf to display searchBar before calling setFocus
      setTimeout(() => {
        if (this.searchBar) this.searchBar.setFocus();
      })

  }

  togggleMenu(){
    const menu: any = document.getElementById('menu');

    if(menu.classList.contains('hidden')){
      menu.classList.remove('hidden');
    }else{
      menu.classList.add('hidden');
    }
  }

  logOut(event: MouseEvent){
    event.preventDefault();
    this.auth.logout();
    this.token.remove();
    this.authRoute.changeAuthStatus(false);
    this.router.navigateByUrl('/')
  }
}
