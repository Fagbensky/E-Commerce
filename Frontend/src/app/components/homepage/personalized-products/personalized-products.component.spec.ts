import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedProductsComponent } from './personalized-products.component';

describe('PersonalizedProductsComponent', () => {
  let component: PersonalizedProductsComponent;
  let fixture: ComponentFixture<PersonalizedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
