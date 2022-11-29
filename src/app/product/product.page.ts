import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor() { }

  // dataService: DataService = new DataService();
  // products: any;
  // id?: number;

  ngOnInit() {
    // // get param id from url
    // //ok na HAHAHA HAHAHAHAHAHA
    // //PRIVATE LAGYAMO K ASI YON HAHAHA
    // //call mo yung variable na id {{id}} sa html mo voila
    // // nyaree
    // //ano ba data type nyang id? number lang naman yan
    // // wow developer
    // // ano pa?
    //
    // this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    // // get product from data service
    // //amputaprivate lang pala
    // // poano na gagawen
    // // /// try ko
    // // namumula ?? luh ayaw
  }

}
