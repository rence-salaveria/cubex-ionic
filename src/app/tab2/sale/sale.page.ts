import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
dataService: DataService = new DataService()
  products: any[] = this.dataService.onSale

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log('lol')
  }
}
