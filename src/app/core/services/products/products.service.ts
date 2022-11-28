import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList = [
    {
      name: 'Tennis converse',
      price: 90000,
      image: 'assets/tenis1.png'
    },
    {
      name: 'Botas Franfurk Boot',
      price: 130000,
      image: 'assets/tenis2.jpg'
    },
    {
      name: 'Tennis casuales',
      price: 70000,
      image: 'assets/tenis3.jpg'
    },
    {
      name: 'Tennis Clasicos',
      price: 100000,
      image: 'assets/tenis4.jpg'
    },
    {
      name: 'Tennis Deportivos',
      price: 150000,
      image: 'assets/tenis5.jpg'
    },{
      name: 'Tennis converse',
      price: 90000,
      image: 'assets/tenis1.png'
    },
    {
      name: 'Botas Franfurk Boot',
      price: 130000,
      image: 'assets/tenis2.jpg'
    },
    {
      name: 'Tennis casuales',
      price: 70000,
      image: 'assets/tenis3.jpg'
    },
    {
      name: 'Tennis Clasicos',
      price: 100000,
      image: 'assets/tenis4.jpg'
    },
    {
      name: 'Tennis Deportivos',
      price: 150000,
      image: 'assets/tenis5.jpg'
    }
  ]
  constructor() { }

  getProducts(){
    return this.productsList;
  }
}
