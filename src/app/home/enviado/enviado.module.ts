import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviadoPageRoutingModule } from './enviado-routing.module';

import { EnviadoPage } from './enviado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviadoPageRoutingModule
  ],
  declarations: [EnviadoPage]
})
export class EnviadoPageModule {}
