import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

import { NewcontactComponent } from './newcontact/newcontact.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    EditcontactComponent,
    NewcontactComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
