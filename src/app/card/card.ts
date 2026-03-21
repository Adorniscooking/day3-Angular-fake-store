import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() products: any;
  added = false;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.products);
    this.added = true;
    setTimeout(() => (this.added = false), 1500);
  }
}
