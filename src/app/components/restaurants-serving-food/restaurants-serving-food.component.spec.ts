import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsServingFoodComponent } from './restaurants-serving-food.component';

describe('RestaurantsServingFoodComponent', () => {
  let component: RestaurantsServingFoodComponent;
  let fixture: ComponentFixture<RestaurantsServingFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsServingFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsServingFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
