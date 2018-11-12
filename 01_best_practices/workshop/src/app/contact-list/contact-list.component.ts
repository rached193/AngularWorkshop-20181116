import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  personList: Person[]
  person: Person
  showForm: boolean
  editing: boolean
  color: string;
  detailVisible: boolean
  selectedIndex : number

  constructor() {
    this.personList = [
      { name: 'John', surname: 'Foo', phone: '555 123 123'}
    ]
    this.person = new Person()

    this.showForm = false
    this.editing = false
    this.color = 'yellow'
    this.detailVisible = false;
  }

  ngOnInit() {
  }

  add() {
    if (!this.editing) {
      this.personList.push(this.person)
    }

    this.person = new Person()
    this.showForm = false
    this.editing = false
  }

  edit(i: number) {
    this.showForm = true
    this.editing = true
    this.person = this.personList[i] 
  }

  removePerson(i: number) {
    this.personList.splice(i,1)
  }

  showDetail(pos : number) {
    this.selectedIndex = pos;
    this.detailVisible = true;
  }

}
