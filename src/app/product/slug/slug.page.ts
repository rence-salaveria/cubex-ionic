import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-slug',
  templateUrl: './slug.page.html',
  styleUrls: ['./slug.page.scss'],
})
export class SlugPage implements OnInit {
  id?: number;
  dataService: DataService = new DataService();
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))
    this.product = this.dataService.products.find(product => product.id === this.id)
  }

}
