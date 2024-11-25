import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenPageRoutingModule } from './presen-routing.module';

import { PresenPage } from './presen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenPageRoutingModule
  ],
  declarations: [PresenPage]
})
export class PresenPageModule {}
