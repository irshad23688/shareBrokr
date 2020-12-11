import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss','../orders.page.scss'],
})
export class CompletedPage implements OnInit {
  terms;
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
  constructor() { }

  ngOnInit() {
  }

}
