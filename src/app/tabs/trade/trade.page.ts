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
  term;
  holdings=[{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"BSE",
    totalInvested:31400
  },
  {
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  }
];
  positions=[{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },
  {
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  },{
    stockName: "Stock Name",
    quantity: 1000,
    lastTradedPrice:"3.14 (0.14%)",
    exchange:"NSE",
    totalInvested:31400
  }
]
watchList=[{
  stockName: "Stock Name",
  lastTradedPrice:"3.14 (0.14%)",
  exchange:"NSE",
},
{
  stockName: "Stock Name",
  lastTradedPrice:"3.14 (0.14%)",
  exchange:"NSE",
},
{
  stockName: "Stock Name",
  lastTradedPrice:"3.14 (0.14%)",
  exchange:"NSE",
},
{
  stockName: "Stock Name",
  lastTradedPrice:"3.14 (0.14%)",
  exchange:"NSE",
},
]
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
 
  // searchValue(searchTerm) {
  //   const filteredItems = this.positions.filter(item => {
  //       // Apply filters
  //   });
  //   return filteredItems.filter(item => {
  //     return filteredItems..toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  // }


}
