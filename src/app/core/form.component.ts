import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model";

@Component({

    selector: "myForm",
    templateUrl: "form.component.html"
})

export class MyFormComponent{

    //objeto curso vacío que se va a rellenar con los datos que el usuario intrudzca
    course: Course = new Course();
    //Al utilizar el mismo formulario tanto para crear como para editar, tenemos que razonar
    //alguna forma para saber si el formulario está en modo edición o en modo cración
    //Para ello creamos esta variable
    //isEdit= false =>Modo Creación
    //isEdit= true=>Modo Edición
    isEdit:boolean = false;
    
    constructor(public model:Model, activeRoute: ActivatedRoute, private router:Router){

        //activeRouter=>nos permite obtener la ruta activa
        activeRoute.params.subscribe(params=> 
            {
                //Si el parámetro "mode" de la ruta ativa es edit,
                //this.Edit = true; => El formulario está en modo edición
                //En caso contrario 
                //this.Edit = false; => Elformulario están en modo Creación
                this.isEdit = params["mode"] == "edit"
                let id = params["id"];
                if(id!=null){
                    Object.assign(this.course, model.getCourse(id) || new Course());
                }
            }
            )
    }

    
    public submitForm(form:NgForm){
        
        if(form.valid){
            //si la validación del formulario es correcta
            //guardamos el curso
            this.model.saveCourse(this.course);
            this.router.navigateByUrl("/"); //una vez insertado redireccionamelo a la raiz, es decir
        }
        //a la tabla
    }


    //método para resetear el valor del objeto curso
    public resetForm(form:NgForm){
        this.course = new Course;
    }


}