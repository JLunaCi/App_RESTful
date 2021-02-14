import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Course } from "./course.model";
import { Observable } from "rxjs";


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
        
        return this.http.get<Course[]>(this.url);
    }

    saveCourse(course: Course): Observable<Course>{

        return this.http.post<Course>(this.url, course);
    }

    updateCourse(course : Course): Observable<Course>{
        return this.http.put<Course>( `${this.url}/${course.id}`, course)
    }

    //muy importante, los espacios entre la url y el id a eliminar, se detectan como caracteres
    //por lo que al hacer la peticio http delete , se hace mal , puesto que no sabe que objeto borrar
    deleteCourse(id: number){
        return this.http.delete<Course>(`${this.url}/${id}`)
    }


    


}