import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalChatPage } from './global-chat.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalChatPageRoutingModule {}
