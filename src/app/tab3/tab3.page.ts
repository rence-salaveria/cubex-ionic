import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  dataService: DataService = new DataService()
  cart: any[] = this.dataService.cart;

  getTotal() {
    let total = 0;
    this.cart.forEach(item => {
      total += item.productPrice;
    })
    return total;
  }
}
