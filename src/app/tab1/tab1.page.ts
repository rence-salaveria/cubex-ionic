import {Component, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('slideWithNav', {static: false}) slideWithNav?: IonSlides;

  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  dataService: DataService = new DataService()
  // get random 4 products from data service
  products: any[] = this.dataService.featured

  constructor() {
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 995,
            image: "banner1.jpg"
          },
          {
            id: 925,
            image: "banner2.jpg"
          },
          {
            id: 940,
            image: "hero.jpg"
          },
          {
            id: 943,
            image: "labyrinth.png"
          },
          {
            id: 944,
            image: "mg.jpg"
          }
        ]
      };
  }

  //Move to Next slide
  // @ts-ignore
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  // @ts-ignore
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    ;
  }

  //Method called when slide is changed by drag or navigation
  // @ts-ignore
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  // @ts-ignore
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  // @ts-ignore
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue: any) => {
      object.isBeginningSlide = istrue;
    });
  }

  // @ts-ignore
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue: any) => {
      object.isEndSlide = istrue;
    });
  }

  addProductToCart(product: any) {
    this.dataService.cart.push(product);
    console.log(this.dataService.cart);
  }
}
