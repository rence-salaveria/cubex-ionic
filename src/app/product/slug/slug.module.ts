import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlugPageRoutingModule } from './slug-routing.module';

import { SlugPage } from './slug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlugPageRoutingModule
  ],
  declarations: [SlugPage]
})
export class SlugPageModule {}
