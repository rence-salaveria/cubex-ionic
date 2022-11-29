import {Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products: any[] = [
    {
      productImage: 'rence.jpg',
      productName: 'Product 1',
      productPrice: 100
    },
    {
      productImage: 'rence.jpg',
      productName: 'Product 2',
      productPrice: 200
    },
    {
      productImage: 'rence.jpg',
      productName: 'Product 3',
      productPrice: 300
    },
    {
      productImage: 'rence.jpg',
      productName: 'Product 4',
      productPrice: 400
    }
  ];

  constructor() {
    this.addProduct()
  }

  addProduct() {
    this.products = [
      {
        productImage: 'rence.jpg',
        productName: 'Product 1',
        productPrice: 100
      },
      {
        productImage: 'rence.jpg',
        productName: 'Product 2',
        productPrice: 200
      },
      {
        productImage: 'rence.jpg',
        productName: 'Product 3',
        productPrice: 300
      },
      {
        productImage: 'rence.jpg',
        productName: 'Product 4',
        productPrice: 400
      }
    ]
  }
}
