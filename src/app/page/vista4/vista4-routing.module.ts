import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vista4Page } from './vista4.page';

const routes: Routes = [
  {
    path: '',
    component: Vista4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vista4PageRoutingModule {}
