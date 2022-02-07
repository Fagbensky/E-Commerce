import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from 'src/app/services/login/auth-route.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenService } from 'src/app/services/login/token.service';
import { faShoppingCart, faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SnotifyService } from 'ng-snotify';

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

  loginPopup: boolean = false;
  signupPopup: boolean = false;
  requestPopup: boolean = false;


  public loggedIn?: boolean;
  public showSearchBar: boolean = false;
  @ViewChild('searchBar') searchBar:any;
  
  constructor(
    private authRoute: AuthRouteService,
    private router: Router,
    private token: TokenService,
    private auth: AuthService,
    private notify: SnotifyService
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
    this.notify.success(`Logged Out`, { timeout: 1500 });
    this.router.navigateByUrl('/');
  }


  addLogin(event: MouseEvent) {
    event.preventDefault();
    this.signupPopup = false;
    this.requestPopup = false;
    this.loginPopup = true;
    document.body.style.overflow = 'hidden';
  }

  addSignup(event: MouseEvent) {
    event.preventDefault();
    this.loginPopup = false;
    this.requestPopup = false;
    this.signupPopup = true;
    document.body.style.overflow = 'hidden';
  }

  addRequest() {
    this.loginPopup = false;
    this.signupPopup = false;
    this.requestPopup = true;
    document.body.style.overflow = 'hidden';
  }

  removeLogin() {
    document.body.style.removeProperty('overflow');
    this.loginPopup = false;
  }

  removeSignup() {
    document.body.style.removeProperty('overflow');
    this.signupPopup = false;
  }

  removeRequest() {
    document.body.style.removeProperty('overflow');
    this.requestPopup = false;
  }
}
