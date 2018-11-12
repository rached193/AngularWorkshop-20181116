import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ContactListComponent,
    HighlightDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
