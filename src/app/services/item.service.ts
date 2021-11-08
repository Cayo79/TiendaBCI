import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 2.5,
      quantity: 5,
      completed: false
    },
    {
      id: 1,
      title: 'Pera',
      price: 6,
      quantity: 3,
      completed: true
    },
    {
      id: 2,
      title: 'Mango',
      price: 12,
      quantity: 5,
      completed: false
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  setItem(item: Item){
    this.items.push(item);
  }

  deleteItem(item: Item) {
    this.items =  this.items
    .filter( x => x.id != item.id);

    return this.items;
  }
}
