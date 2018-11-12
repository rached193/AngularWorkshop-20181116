import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  taskArray: any[];
  task: string;
  isDisabled: boolean;

  constructor() {
    this.taskArray = [];
    this.task = ''
    this.isDisabled = true
  }

  add() {
    if (this.task !== '') {
      let taskObject = {
        name: this.task,
        active: true
      }
      this.taskArray.push(taskObject)
      this.task = ''
    }
  }

  markAsDone(position) {
    // console.log('clickado en ' + position + '!!')
    this.taskArray[position].active = false  
  }

  ngOnInit() {
  }

}
