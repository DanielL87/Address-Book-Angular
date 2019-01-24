import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  @Input() childContactList: Contact[];
  @Input() notesColor: any;

  @Output() clickEditContact = new EventEmitter();

  clickEdit(emittedContact) {
    this.clickEditContact.emit(emittedContact);
  }

  ngOnInit() {
  }

}
