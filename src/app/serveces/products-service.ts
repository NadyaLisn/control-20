import {Injectable} from "@angular/core";
import {ProductsType} from "../types/products.type";


@Injectable()
export class ProductsService {

  constructor() {
  }

  productsList(): ProductsType[] {
    return [
      {
        image: 'macaroon1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      },
    ]
  }
}
