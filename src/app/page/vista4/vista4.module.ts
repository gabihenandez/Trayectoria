import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vista4PageRoutingModule } from './vista4-routing.module';

import { Vista4Page } from './vista4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista4PageRoutingModule
  ],
  declarations: [Vista4Page]
})
export class Vista4PageModule {}
