import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vista5PageRoutingModule } from './vista5-routing.module';

import { Vista5Page } from './vista5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista5PageRoutingModule
  ],
  declarations: [Vista5Page]
})
export class Vista5PageModule {}
