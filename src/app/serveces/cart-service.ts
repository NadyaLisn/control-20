import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class CartService {
  amount: number = 0;
  price: number = 0;

  constructor() { }
}
