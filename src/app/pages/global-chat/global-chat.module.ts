import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalChatPageRoutingModule } from './global-chat-routing.module';

import { GlobalChatPage } from './global-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalChatPageRoutingModule
  ],
  declarations: [GlobalChatPage]
})
export class GlobalChatPageModule {}
