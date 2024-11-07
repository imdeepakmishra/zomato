import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsFoodItemComponent } from './restaurants-food-item.component';

describe('RestaurantsFoodItemComponent', () => {
  let component: RestaurantsFoodItemComponent;
  let fixture: ComponentFixture<RestaurantsFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsFoodItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
