import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  products: any[] = [
    {
      id: 1,
      productImage: 'hoodie.jpg',
      productName: 'Maison Ghost Hoodie v1',
      productPrice: 750,
      isCarted: true,
      isFeatured: true,
      isOnSale: true
    },
    {
      id: 2,
      productImage: 'hoodie2.jpg',
      productName: 'Maison Ghost Hoodie v2',
      productPrice: 700,
      isCarted: false,
      isFeatured: true,
      isOnSale: true
    },
    {
      id: 3,
      productImage: 'jersey.jpg',
      productName: 'JLF Basketball Jersey',
      productPrice: 300,
      isCarted: true,
      isFeatured: false,
      isOnSale: false
    },
    {
      id: 4,
      productImage: 'labyrinth.png',
      productName: 'Labyrinth High Quality Tshirt',
      productPrice: 630.50,
      isCarted: false,
      isFeatured: false,
      isOnSale: false
    },
    {
      id: 5,
      productImage: 'mg.jpg',
      productName: 'MG Shirts',
      productPrice: 420,
      isCarted: true,
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 6,
      productImage: 'caramel.gif',
      productName: 'Scented Candle Design',
      productPrice: 500,
      isCarted: false,
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 7,
      productImage: 'drip.jpg',
      productName: 'Drip Logo Design',
      productPrice: 1500,
      isCarted: true,
      isFeatured: true,
      isOnSale: true
    },
  ];

  getProductById(id: number) {
    return this.products.find(product => product.id === id)
  }

  // push all isCarted to cart
  cart: any[] = this.products.filter(product => product.isCarted);

  // push all isFeatured to featured
  featured: any[] = this.products.filter(product => product.isFeatured);

  // push all isOnSale to onSale
  onSale: any[] = this.products.filter(product => product.isOnSale);
}
