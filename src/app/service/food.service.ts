import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  http$ = inject(HttpClient);

  apiEndPointURL: string = 'https://freeapi.miniprojectideas.com/api/zomato/';

  getAllFoods(): Observable<any> {
    return this.http$.get(this.apiEndPointURL + 'GetAllFoodCategory');
  }

  getRestaurantServingByCategoryId(foodCategoryId: number): Observable<any> {
    return this.http$.get(
      this.apiEndPointURL +
        'GetRestaurantServingByCategoryId?categoryId=' +
        foodCategoryId
    );
  }

  getFoodItemOfRestaurantByCategory(
    restaurantId: number,
    categoryId: number
  ): Observable<any> {
    return this.http$.get(
      this.apiEndPointURL +
        'GetFoodItemOfRestaurantByCategory?restaurantId=' +
        restaurantId +
        '&categoryId=' +
        categoryId
    );
  }

  onRegister(payload: any): Observable<any> {
    return this.http$.post(this.apiEndPointURL + 'AddNewUser', payload);
  }

  onLogin(payload: any): Observable<any> {
    return this.http$.post(this.apiEndPointURL + 'Login', payload);
  }

  addToCart(payload: any) {
    return this.http$.post(this.apiEndPointURL + 'AddToCart', payload);
  }

  getCartItemsByCustomerIdForRestaurant(
    customerId: number,
    restaurantId: number
  ) {
    return this.http$.get(
      this.apiEndPointURL +
        'GetCartItemsByCustomerIdForRestaurant?customerId=' +
        customerId +
        '&restaurantId=' +
        restaurantId
    );
  }

  onOrder(payload: any) {
    return this.http$.post(this.apiEndPointURL + 'AddNewOrder', payload);
  }
}
