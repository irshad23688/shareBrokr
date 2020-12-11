import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  },
  {
    path: 'completed',
    loadChildren: () => import('./completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pending/pending.module').then( m => m.PendingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
