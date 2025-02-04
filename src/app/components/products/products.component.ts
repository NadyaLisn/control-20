import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {ProductsType} from "../../types/products.type";
import {CartService} from "../../serveces/cart-service";
import {ButtonEffectDirective} from "../../directives/button-effect.directive";

@Component({
  selector: 'products',
  standalone: true,
  imports: [
    NgForOf, ButtonEffectDirective, CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [CurrencyPipe]
})
export class ProductsComponent {
  @Input() product!: ProductsType;
  // @Output() addToCartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() addToCartEvent: EventEmitter<number> = new EventEmitter<number>();
  // addToCart = signal<any | null>(null);
  constructor(public cartService: CartService) { }

  public addToCart(): void {
    this.cartService.amount++;
    this.addToCartEvent.emit(this.cartService.price += this.product.price)
  }
}
