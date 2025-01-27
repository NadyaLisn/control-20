import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdvantagesType} from "./types/advantages.type";
import {NgForOf, NgIf} from "@angular/common";
import {ProductsType} from "./types/products.type";
import {OrderType} from "./types/order.type";
import {FormsModule} from "@angular/forms";
import {ContactsType} from "./types/contacts.type";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public products: ProductsType[] = [
    {
      image: 'macaroon1.png',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon2.png',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon3.png',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon4.png',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
  ];
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
    phone: '+375 (29) 368-98-68',
    linkInstagram: 'https://instagram.com/',
  }
}
