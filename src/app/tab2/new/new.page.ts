import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  dataService: DataService = new DataService()
  products: any[] = this.dataService.featured;

  constructor() { }

  ngOnInit() {
  }

}
