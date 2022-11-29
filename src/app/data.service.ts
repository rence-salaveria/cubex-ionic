import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  products: any[] = [
    {
      productImage: 'hoodie.jpg',
      productName: 'Maison Ghost Hoodie v1',
      productPrice: 750,
      isCarted: true,
      isFeatured: true
    },
    {
      productImage: 'hoodie2.jpg',
      productName: 'Maison Ghost Hoodie v2',
      productPrice: 700,
      isCarted: false,
      isFeatured: true
    },
    {
      productImage: 'jersey.jpg',
      productName: 'JLF Basketball Jersey',
      productPrice: 300,
      isCarted: true,
      isFeatured: false
    },
    {
      productImage: 'labyrinth.png',
      productName: 'Labyrinth High Quality Tshirt',
      productPrice: 630.50,
      isCarted: false,
      isFeatured: false
    },
    {
      productImage: 'mg.jpg',
      productName: 'MG Shirts',
      productPrice: 420,
      isCarted: true,
      isFeatured: false
    },
    {
      productImage: 'caramel.gif',
      productName: 'Scented Candle Design',
      productPrice: 500,
      isCarted: false,
      isFeatured: true
    },
    {
      productImage: 'drip.jpg',
      productName: 'Drip Logo Design',
      productPrice: 1500,
      isCarted: true,
      isFeatured: true
    },
  ];

  // push all isCarted to cart
  cart: any[] = this.products.filter(product => product.isCarted);

  // push all isFeatured to featured
  featured: any[] = this.products.filter(product => product.isFeatured);
}
