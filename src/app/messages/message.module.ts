import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MessageErrorHandler } from "./errorhandler";
import { MessageComponent } from "./message.component";
import { MessageService } from "./message.service";

@NgModule({

imports:[BrowserModule, RouterModule],
declarations: [MessageComponent],
exports:[MessageComponent],
providers: [MessageService,
  {provide: ErrorHandler, useClass:MessageErrorHandler}

]

})
export class MessageModule{

}
