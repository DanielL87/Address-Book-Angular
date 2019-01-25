import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  constructor() { }

  @Input() selectedNewContact;
  @Input () saveNewContact;

  @Output() clickSaveContact = new EventEmitter();

  @Output() clickNewContact = new EventEmitter();

  clickSave(name, address, phoneNumber, note) {
    let newContact = new Contact(name, address, phoneNumber, note)
    this.clickSaveContact.emit(newContact);
  }

  clickNew(){
    this.clickNewContact.emit();
  }

  ngOnInit() {
  }

}
