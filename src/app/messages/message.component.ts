import { Message } from "./message.model";
import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({


  selector: "paMessages",
  templateUrl: "message.componen.html"

})

export class MessageComponent{

  lastMessage : Message;


  constructor(private messageService: MessageService, router:Router) {
    messageService.messages.subscribe(m=>this.lastMessage = m);

    //si la navegación ha sido exitosa o ha sido cancelada
    //el último mensaje de su pila , lo ponemos a null

    router.events.pipe(filter(e=>e instanceof NavigationEnd || e instanceof NavigationCancel))
    .subscribe(e=>{this.lastMessage =  null})

  }

}

