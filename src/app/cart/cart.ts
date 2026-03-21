import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems;
  getCount;
  getTotal;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
    this.getCount  = this.cartService.getCount;
    this.getTotal  = this.cartService.getTotal;
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  increment(item: any): void {
    this.cartService.addToCart(item);
  }

  decrement(item: any): void {
    this.cartService.decrementItem(item.id);
  }
}

