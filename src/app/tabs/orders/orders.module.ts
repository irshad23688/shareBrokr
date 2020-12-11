import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { PendingPage } from './pending/pending.page';
import { CompletedPage } from './completed/completed.page';
import { PendingPageModule } from './pending/pending.module';
import { CompletedPageModule } from './completed/completed.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    PendingPageModule,
    CompletedPageModule
    
  ],
  entryComponents:[],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
