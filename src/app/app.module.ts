import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListdataComponent } from './listdata/listdata.component';
import {HttpClientModule} from '@angular/common/http';
import { CrudappComponent } from './crudapp/crudapp.component'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListdataComponent,
    CrudappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
