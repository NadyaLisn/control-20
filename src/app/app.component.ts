import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdvantagesType} from "./types/advantages.type";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ProductsType} from "./types/products.type";
import {OrderType} from "./types/order.type";
import {FormsModule} from "@angular/forms";
import {ContactsType} from "./types/contacts.type";
import {ProductsService} from "./serveces/products-service";
import {ProductsComponent} from "./components/products/products.component";
import {CartService} from "./serveces/cart-service";
import {AdvantagesComponent} from "./components/advantages/advantages.component";
import {ButtonEffectDirective} from "./directives/button-effect.directive";
import {PhoneCustomPipePipe} from "./pipes/phone-custom.pipe.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule, NgIf, ProductsComponent, FormsModule, AdvantagesComponent, ButtonEffectDirective, PhoneCustomPipePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ProductsService]
})
export class AppComponent {

  constructor(private productsService: ProductsService, public cartService: CartService) {
  }



  public products: ProductsType[] = this.productsService.productsList();
  public orderInput: OrderType = {
    productTitle: '',
    name: '',
    phone: '',
  }
  public addToCart(product: ProductsType, element: HTMLElement ): void {
    element.scrollIntoView({behavior: 'smooth'});
    this.orderInput.productTitle = product.title.toUpperCase();
  }
  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth'});
  }
  public showPresent: boolean = true;
  public contacts: ContactsType = {
    phone: '375293689868',
    linkInstagram: 'https://instagram.com/',
  }
  public addOrderEvent(price: number, product: ProductsType, element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth'});
    this.cartService.price = price;
    this.orderInput.productTitle += product.title.toUpperCase() + ', ';
    alert(this.orderInput.productTitle + "добавлен в корзину");
  }



}
