import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { MyFormComponent } from './core/form.component';
import { MyTableComponent } from './core/table.component';
import { MessageModule } from './messages/message.module';
import { ModelModule } from './model/model.module';

@NgModule({
 
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
