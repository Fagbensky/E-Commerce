import { Component, OnInit } from '@angular/core';
import { TodayProductsService } from 'src/app/services/homepage/todayProduct/today-products.service';

@Component({
  selector: 'app-todays-product',
  templateUrl: './todays-product.component.html',
  styleUrls: ['./todays-product.component.scss']
})
export class TodaysProductComponent implements OnInit {

  constructor(private todayProductService: TodayProductsService) { }

  ngOnInit(): void {
  }

  TodayProducts$ = this.todayProductService.todaysProduct$;

}
