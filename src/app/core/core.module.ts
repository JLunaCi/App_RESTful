import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MessageModule } from "../messages/message.module";
import { ModelModule } from "../model/model.module";
import { MyFormComponent } from "./form.component";
import { NotFoundComponent } from "./notFound.component";
import { MyTableComponent } from "./table.component";

@NgModule({

    imports: 
    [
        BrowserModule, 
        FormsModule,
        ModelModule, 
        RouterModule,
        MessageModule
    ],
    declarations:[MyFormComponent, MyTableComponent, NotFoundComponent],
    providers:[],
    exports:[ModelModule, MyTableComponent, MyFormComponent]

})
export class CoreModule{

}