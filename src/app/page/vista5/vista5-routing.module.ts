import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vista5Page } from './vista5.page';

const routes: Routes = [
  {
    path: '',
    component: Vista5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vista5PageRoutingModule {}
