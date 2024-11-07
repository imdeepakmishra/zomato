import { Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantsServingFoodComponent } from './components/restaurants-serving-food/restaurants-serving-food.component';
import { RestaurantsFoodItemComponent } from './components/restaurants-food-item/restaurants-food-item.component';

export const routes: Routes = [
  { path: 'foods', component: FoodsComponent },
  { path: 'restaurant-foods/:id', component: RestaurantsServingFoodComponent },
  {
    path: 'restaurant-food-items/:restaurantId/:categoryId',
    component: RestaurantsFoodItemComponent,
  },
  { path: '**', component: FoodsComponent },
];
