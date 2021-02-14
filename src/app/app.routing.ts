import { RouterModule, Routes } from "@angular/router";
import { MyFormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { MyTableComponent } from "./core/table.component";

const routes : Routes= 
[
    {path: "form/:mode/:id", component:MyFormComponent},//ruta para edición
    
    {path: "form/:mode", component:MyFormComponent},//ruta para creación

    {path: "", component:MyTableComponent}, //En este caso si no hay path quiero que me lleves al
    //componente MyTableComponent
    {path: "**", component: NotFoundComponent}
]

export const routing = RouterModule.forRoot(routes);