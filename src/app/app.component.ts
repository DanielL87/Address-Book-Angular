import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedContact = null;
  // tempName = "";
  // tempAddress = "";
  // tempPhone = 0;
  // tempNote = "";
  // createdContact = new Contact(this.tempName, this.tempAddress, this.tempPhone, this.tempNote);


  MasterListofContacts: Contact[] = [
    new Contact("Kenny", "Seattle", 123, "Epicodus"),
    new Contact("Cristian", "Seattle", 345, "Galvanize"),
    new Contact("Manasa", "Seattle", 444, "Epicodus"),
    new Contact("Gulzat", "Seattle", 555, "Galvanize")
  ];

  notesColor(contact) {
    if (contact.note === "Epicodus") {
      return "bg-info";
    }
    else {
      return "bg-danger";
    }
  }

  editContact(clickedContact) {
    this.selectedContact = clickedContact;
  }

  finishedEditing() {
    this.selectedContact = null;
  }

  saveNewContact(contact) {

  this.MasterListofContacts.push(contact);
  
  }

}
