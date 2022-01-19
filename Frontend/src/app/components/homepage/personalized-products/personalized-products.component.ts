import { Component, OnInit } from '@angular/core';
import { PersonalizedProjectService } from 'src/app/services/homepage/personalizedProject/personalized-project.service';

@Component({
  selector: 'app-personalized-products',
  templateUrl: './personalized-products.component.html',
  styleUrls: ['./personalized-products.component.scss']
})
export class PersonalizedProductsComponent implements OnInit {

  constructor(private PersonProductService: PersonalizedProjectService) { }

  ngOnInit(): void {
  }

  personProducts$ = this.PersonProductService.personProducts$;

}
