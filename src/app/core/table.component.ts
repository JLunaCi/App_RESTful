import { Component } from "@angular/core";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model";

@Component({

    selector: "myTable",
    templateUrl: "table.component.html"
})

export class MyTableComponent{

    //Inyectamos el model para poder accerder a sus métodos
    constructor(public module: Model){}

    getCourses():Course[]{
        return this.module.getCourses();
    }

}