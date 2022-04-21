import { Component, OnInit } from '@angular/core';
import { GlobalChatService } from 'src/app/services/global-chat.service';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.page.html',
  styleUrls: ['./global-chat.page.scss'],
})
export class GlobalChatPage implements OnInit {

  constructor(public globalChatService:GlobalChatService) { }

  ngOnInit() {
  }

}
