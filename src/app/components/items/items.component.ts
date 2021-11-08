import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  sms: string = '';

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {

    this.items = this.itemService.getItems();
    this.sms = "Pagar un total de: ";
    this.getTotal();
  }

  borrarItem(item: Item) {
    // this.items = this.items.filter( x => x.id != item.id);
    this.items = this.itemService.deleteItem(item);
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                    .filter( x => !x.completed)
                    .map( item => item.price * item.quantity)
                    .reduce( (total, v) => total += v, 0);
  }

  toggleItem(item: Item) {
    this.getTotal();
  }
}
