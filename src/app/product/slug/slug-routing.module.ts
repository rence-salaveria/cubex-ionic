import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlugPage } from './slug.page';

const routes: Routes = [
  {
    path: '',
    component: SlugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlugPageRoutingModule {}
