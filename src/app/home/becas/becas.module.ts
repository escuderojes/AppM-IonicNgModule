import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecasPageRoutingModule } from './becas-routing.module';

import { BecasPage } from './becas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecasPageRoutingModule
  ],
  declarations: [BecasPage]
})
export class BecasPageModule {}
