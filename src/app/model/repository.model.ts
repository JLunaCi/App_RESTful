
//Esa clase va a contener los métodos Crud del Curso

import { Inject, Injectable } from "@angular/core";
import { Course } from "./course.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
//llamará al servicio RESTtful que creamos
export class Model{

    private courses: Course[];
    
    //si la condición c.id==id => es true, me devuelve el curso 
    //locator =>encapsula un funcion que retorna un curso en caso de que la condición sea true
    private locator = (c:Course, id:number) => c.id == id;


    //procedemos a inyectar la clase RestDataSource,
    //la ventaja que tiene la inyección de dependencias es que no
    //me hace falta instanciar la clase que estoy inyectando,
    //basta con declararla en el constructor para poder utilizarla
    constructor(private dataSource : RestDataSource){
        this.courses = new Array<Course>();
        //rellenamos los datos peticionados mediante get , en el array courses
        this.dataSource.getData().subscribe(c=> this.courses = c);
    }

    getCourses(): Course[]{
        return this.courses;
    }

    getCourse(id:number):Course{
        return this.courses.find(c=>this.locator(c,id));
    }

    saveCourse(course: Course){
        if(course.id == 0 || course.id==null){
            //Lo que creo de esta parte del código 
            // es que tenemos que insertarlo en el web api
            //y además suscribir la insercción para que se 
            //vean reflejados los datos en la vista.
            this.dataSource.saveCourse(course).
            subscribe(c=> this.courses.push(c));

        }else{
            //actualizamos el Curso, ya que si que existe
            this.dataSource.updateCourse(course).
            subscribe(c=> {
                //obtenemos la posición del curso en la lista de cursos.
                let index = this.courses.findIndex(c=>this.locator(c,course.id));
                //acutalizamos en función de su posición
                this.courses.splice(index,1,course);
                //index=>posicion en el que se encuentra el curso
                //1=> solo quiero actualizar un campo
                //course=> objeto a actualizar.
            });
        }
    }

    deleteCourse(id: number){
        //el método splice nos sirve también para eliminar
        //insertandole solo dos parametros,
        //index=> la posición del objeto a borrar
        //1=>cuantos campos queremos borrar, en este caso solo uno
        this.dataSource.deleteCourse(id).
        subscribe(()=> {
            //encontramos la posicion del objeto
            let index = this.courses.findIndex(c=> this.locator(c, id));
            //eliminamos el objeto
            if(index > -1){
                this.courses.splice(index,1);
            }
            
        })
    }


    getNextProudctId(id:number):number{

        //enonctramos la posición del producto
        let index = this.courses.findIndex(p=>this.locator(p,id));
  
        if(index> (-1)){
          //length= 5
          //index = 3 => 4 producto 
          //5 > 3 + 2 = 5 > 5 //no se cumple
          // el condicional debe ser  ">="
  
          return this.courses[this.courses.length >= index + 2 ? index + 1 : 0].id;
  
        }else{
          return id || 0;
        }
      }
  
      getPreviousProductId(id:number):number{
        let index = this.courses.findIndex(p=>this.locator(p,id));
  
        if(index> (-1)){
  
          return this.courses[index> 0? index -1 : this.courses.length - 1].id;
  
        }else{
          return id || 0;
        }
  
      }



}