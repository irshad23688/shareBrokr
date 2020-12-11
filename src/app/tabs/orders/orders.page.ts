import { Component, OnInit } from '@angular/core';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
    // console.log('Tab change fired', ev.detail.index);
    // console.log(this.st);

    // this.activeTabIndex = ev.detail.index;
  }
}
