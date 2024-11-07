import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodService } from './service/food.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  food$ = inject(FoodService);

  registerObj: any = {
    userId: 0,
    userName: '',
    role: 'Customer',
    password: '',
    mobileNo: '',
    emailId: '',
    restaurantId: 0,
  };

  loginObj: any = {
    userName: '',
    password: '',
  };
  loggednUserData: any;

  constructor() {
    const isLocalData = localStorage.getItem('zomato_user');
    if (isLocalData) {
      this.loggednUserData = JSON.parse(isLocalData);
    }
  }
  onLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  onRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  onCloseLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  onCloseRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  onSave() {
    this.food$.onRegister(this.registerObj).subscribe((res) => {
      if (res.result) {
        this.onCloseRegister();
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggednUserData = res.data;
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  onLoginForm() {
    this.food$.onLogin(this.loginObj).subscribe((res) => {
      if (res.result) {
        this.onCloseLogin();
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggednUserData = res.data;
      } else {
        alert(res.message);
      }
    });
  }

  onLogout() {
    localStorage.removeItem('zomato_user');
    this.loggednUserData = null;
  }
}
