import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../service/food.service';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants-serving-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants-serving-food.component.html',
  styleUrl: './restaurants-serving-food.component.scss',
})
export class RestaurantsServingFoodComponent {
  currentCategoryId: number = 0;
  restaurantList: any[] = [];

  constructor(
    private food: FoodService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.params.subscribe((result) => {
      this.currentCategoryId = result['id'];
      this.getRestaurantServingByCategoryId();
    });
  }

  getRestaurantServingByCategoryId() {
    this.food
      .getRestaurantServingByCategoryId(this.currentCategoryId)
      .subscribe((res) => {
        this.restaurantList = res.data;
      });
  }
  restaurantServingFoodItem(restaurantID: number) {
    this.router.navigate([
      '/restaurant-food-items/',
      restaurantID,
      this.currentCategoryId,
    ]);
  }
}
