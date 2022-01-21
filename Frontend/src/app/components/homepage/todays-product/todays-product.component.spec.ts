import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysProductComponent } from './todays-product.component';

describe('TodaysProductComponent', () => {
  let component: TodaysProductComponent;
  let fixture: ComponentFixture<TodaysProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
