import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message } from "./message.model";

@Injectable()
export class MessageService {

    private subject = new Subject<Message>();

    //private handler: (m: Message) => void;

    reportMessage(msg: Message) {
        this.subject.next(msg);
        
        /*
        if (this.handler != null) {
            this.handler(msg);
        }
        */
    }

    //propiedad
    get messages() : Observable<Message>{
        return this.subject;
    }

    /*
    registerMessageHandler(handler: (m: Message) => void) {
        this.handler = handler;
    }
    */
}
