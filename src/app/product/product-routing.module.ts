import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';

const routes: Routes = [
  {
    /**
     * /product/
     */
    path: '',
    component: ProductPage
  },
  {
    /**
     * /product/:id
     * :id is a parameter
     */
    path: ':id',
    loadChildren: () => import('./slug/slug.module').then( m => m.SlugPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
