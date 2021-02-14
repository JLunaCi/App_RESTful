import { Component } from "@angular/core";

@Component({

  selector: "paNotFoud",
  template : `<h3 class="bg-ander" text-white p-2>Sorry , something went wrong</h3>
  <button class="btn btn-primary" routerLink =  "/" >Start Over</button>`


})
export class NotFoundComponent{

}
