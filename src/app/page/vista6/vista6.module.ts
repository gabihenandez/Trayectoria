import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vista6PageRoutingModule } from './vista6-routing.module';

import { Vista6Page } from './vista6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista6PageRoutingModule
  ],
  declarations: [Vista6Page]
})
export class Vista6PageModule {}
