import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss','../orders.page.scss'],
})
export class PendingPage implements OnInit {
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
 
  constructor() { }

  ngOnInit() {
  }

}
