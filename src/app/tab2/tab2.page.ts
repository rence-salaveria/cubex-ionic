import {Component} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dataService: DataService = new DataService()
  products: any[] = this.dataService.products

  constructor() {
  }

}
