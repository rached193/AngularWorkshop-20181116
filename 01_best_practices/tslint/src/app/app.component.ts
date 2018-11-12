import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class appComponent {

  title:string = 'tslint';
  subTitle


  ngOnInit() {
    this.subTitle = 'example';
    debugger;

    if (this.title == 'tslint') console.log('El titulo es ' + this.title);
  }
}
