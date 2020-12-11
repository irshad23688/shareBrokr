import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradePageRoutingModule } from './trade-routing.module';

import { TradePage } from './trade.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradePageRoutingModule,
    SuperTabsModule,
    Ng2SearchPipeModule

  ],
  declarations: [TradePage]
})
export class TradePageModule {}
