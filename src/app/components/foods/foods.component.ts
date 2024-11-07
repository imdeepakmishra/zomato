import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../../service/food.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent implements OnInit {
  food$ = inject(FoodService);
  router$: Router = inject(Router);

  foodItems: any[] = [];

  ngOnInit() {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory() {
    this.food$.getAllFoods().subscribe((result) => {
      this.foodItems = result.data;
    });
  }

  navigateToRestaurantFoods(id: number) {
    this.router$.navigate(['/restaurant-foods', id]);
  }
}
