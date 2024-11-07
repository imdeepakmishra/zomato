import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../service/food.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-restaurants-food-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './restaurants-food-item.component.html',
  styleUrl: './restaurants-food-item.component.scss',
})
export class RestaurantsFoodItemComponent {
  activatedRoutes$ = inject(ActivatedRoute);
  food$ = inject(FoodService);

  foodItems: any[] = [];
  cartItems: any[] = [];
  restaurantId: number = 0;
  categoryId: number = 0;
  totalAmount: number = 0;
  loggedUserData: any;

  constructor() {
    this.activatedRoutes$.params.subscribe((res) => {
      this.restaurantId = res['restaurantId'];
      this.categoryId = res['categoryId'];
      this.getFoodItemOfRestaurantByCategory();

      const localData = localStorage.getItem('zomato_user');
      if (localData) {
        this.loggedUserData = JSON.parse(localData);

        this.getCartItemsByCustomerIdForRestaurant();
      }
    });
  }

  getFoodItemOfRestaurantByCategory() {
    this.food$
      .getFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId)
      .subscribe((result) => {
        this.foodItems = result.data;
      });
  }

  addToCart(id: number) {
    const localData = localStorage.getItem('zomato_user');
    if (localData) {
      this.loggedUserData = JSON.parse(localData);

      const orderObj: any = {
        customerId: this.loggedUserData.userId,
        itemId: id,
        quantity: 1,
      };

      this.food$.addToCart(orderObj).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.getCartItemsByCustomerIdForRestaurant();
        } else {
          alert(res.message);
        }
      });
    } else {
      alert('User is not logged in, please login');
    }
  }

  getCartItemsByCustomerIdForRestaurant() {
    this.food$
      .getCartItemsByCustomerIdForRestaurant(
        this.loggedUserData.userId,
        this.restaurantId
      )
      .subscribe((res: any) => {
        this.cartItems = res.data;
        this.cartItems.forEach((element) => {
          this.totalAmount = this.totalAmount + element.price;
        });
      });
  }

  onOrder() {
    const obj: any = {
      userId: this.loggedUserData.userId,
      totalAmount: this.totalAmount,
      restaurantId: this.restaurantId,
      deliveryAddress: 'xyz, address',
    };

    this.food$.onOrder(obj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getCartItemsByCustomerIdForRestaurant();
        this.totalAmount = 0;
      } else {
        alert(res.message);
      }
    });
  }
}
