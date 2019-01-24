import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  constructor() { }

  @Input() contact: Contact;
  @Input() notesColor;

  @Output() clickSender = new EventEmitter();

  editButtonClicked() {
    this.clickSender.emit();
  }

  ngOnInit() {
  }

}
