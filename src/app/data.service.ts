import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  products: any[] = [
    {
      id: 1,
      productImage: 'embossed.jpg',
      productName: 'Embossed by HTSRC',
      productPrice: 650,
      isCarted: true,
      isFeatured: true,
      isOnSale: true,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
    },
    {
      id: 2,
      productImage: 'emoji-fever.jpg',
      productName: 'Pastel Emoji TShirt',
      productPrice: 700,
      isCarted: false,
      isFeatured: true,
      isOnSale: true,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
    },
    {
      id: 3,
      productImage: 'emoji-fever-blk.jpg',
      productName: 'Pastel Emoji TShirt Black',
      productPrice: 300,
      isCarted: true,
      isFeatured: false,
      isOnSale: false,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
    },
    {
      id: 4,
      productImage: 'htsrc.jpg',
      productName: 'HTSRC Designer TShirt',
      productPrice: 600.00,
      isCarted: false,
      isFeatured: false,
      isOnSale: false,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
    },
    {
      id: 5,
      productImage: 'money-drop.jpg',
      productName: 'Money Drop TShirt',
      productPrice: 420,
      isCarted: true,
      isFeatured: false,
      isOnSale: true,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
    },
    {
      id: 6,
      productImage: 'peace.jpg',
      productName: 'Peace Designer TShirt',
      productPrice: 500,
      isCarted: false,
      isFeatured: true,
      isOnSale: false,
      productDescription: "Lorem ipsum dolor sit amet. Ut eaque iste ut galisum placeat est accusamus sequi. 33 internos culpa quo porro dolorum hic ipsa amet ab impedit voluptatibus nam fugit rerum ab repellat fugiat. Vel voluptatem provident sit dolor cumque qui molestias molestias non sunt beatae sit modi veniam qui asperiores officiis et voluptatem officiis. Eum eligendi cumque et iusto praesentium ab labore rerum cum dolorem veniam est deserunt illum et delectus repudiandae. "
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
