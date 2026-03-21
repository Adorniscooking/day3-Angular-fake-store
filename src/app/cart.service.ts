import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = signal<any[]>([]);

  cartItems = this._cartItems.asReadonly();

  getCount = computed(() =>
    this._cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );

  getTotal = computed(() =>
    this._cartItems().reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
  );

  addToCart(product: any): void {
    const current = this._cartItems();
    const existing = current.find((p) => p.id === product.id);
    if (existing) {
      this._cartItems.set(
        current.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      this._cartItems.set([...current, { ...product, quantity: 1 }]);
    }
  }

  decrementItem(productId: number): void {
    const current = this._cartItems();
    const item = current.find((p) => p.id === productId);
    if (!item) return;
    if (item.quantity > 1) {
      this._cartItems.set(
        current.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number): void {
    this._cartItems.set(this._cartItems().filter((p) => p.id !== productId));
  }

  clearCart(): void {
    this._cartItems.set([]);
  }
}
