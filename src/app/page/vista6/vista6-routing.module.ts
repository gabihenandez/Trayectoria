import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vista6Page } from './vista6.page';

const routes: Routes = [
  {
    path: '',
    component: Vista6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vista6PageRoutingModule {}
