import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Course } from "./course.model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource{

    //Esta clase va a contener las peticione Http que se realizarán
    // a la Web Api que hemos creado con Node js.

    //HttpCliente=>nos permite realizar peticiones http
    //url=> la url donde vamos a peticionar información
    constructor(private http : HttpClient, 
        @Inject(REST_URL) private url:string){}



    //PETICIONES HTTP: GET, POST, PUT, DELETE

    getData():Observable<Course[]>{
        
        return this.sendRequest<Course[]>("GET",this.url);
    }

    saveCourse(course: Course): Observable<Course>{

        return this.sendRequest<Course>("POST",this.url, course);
    }

    updateCourse(course : Course): Observable<Course>{
        return this.sendRequest<Course>( "PUT",`${this.url}/${course.id}`, course)
    }

    //muy importante, los espacios entre la url y el id a eliminar, se detectan como caracteres
    //por lo que al hacer la peticio http delete , se hace mal , puesto que no sabe que objeto borrar
    deleteCourse(id: number){
        return this.sendRequest<Course>("DELETE",`${this.url}/${id}`)
    }

    
    //MÉTODO GENÉRICO PARA ENCAPCULAR TODAS LAS TIPOS DE PETICIONES HTTP
    // EN UN SOLO MÉTODO
    private sendRequest<T>(verb:string, url:string, objeto?:Course):Observable<T>{

        let myHeaders= new HttpHeaders();
        myHeaders = myHeaders.set("Acces-key","<secret>");
        myHeaders = myHeaders.set("Application-Name","HomeAngular");
  
        return this.http.request<T>(verb, url,
              {body:objeto,
               headers: myHeaders
              }).pipe(catchError((error: Response)=>throwError(`Network Error: ${error.statusText}
              (${error.status})`)));
      }


    


}