import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";

@NgModule({
    providers:[Model, RestDataSource ,
    {provide: REST_URL,
    useValue: `http://localhost:3500/courses`}],
    imports: [HttpClientModule]


})
export class ModelModule{}