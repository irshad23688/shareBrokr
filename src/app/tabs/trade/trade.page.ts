import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
declare var $:any;
@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TradePage implements OnInit {
 
  activeTabIndex: number;
 
  @ViewChild('superTabs', { read: SuperTabs }) st: SuperTabs;

  constructor() { }

  ngOnInit() {
    console.log(this.st);
  }
  
  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
    console.log('Tab change fired', ev.detail.index);
    console.log(this.st);

    this.activeTabIndex = ev.detail.index;
    if(this.activeTabIndex===0){}
  }

  selectTab(index: number) {
    console.log(this.st,this.st.selectTab(index, true));

    this.st.selectTab(index, true);
  }
  searchValue(e) {
    console.log(e.data);

  }

}
