import { Component } from "@angular/core";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model";

@Component({

    selector: "myTable",
    templateUrl: "table.component.html"
})

export class MyTableComponent{

    //Inyectamos el model para poder accerder a sus métodos
    constructor(public model: Model){}

    public getCourses():Course[]{
        return this.model.getCourses();
    }

    public deleteCourse(id: number){

        this.model.deleteCourse(id);
    }

}