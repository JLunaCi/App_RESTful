import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { MyFormComponent } from "./form.component";
import { MyTableComponent } from "./table.component";

@NgModule({

    imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
    declarations:[MyFormComponent, MyTableComponent],
    exports:[ModelModule, MyTableComponent, MyFormComponent]

})
export class CoreModule{

}