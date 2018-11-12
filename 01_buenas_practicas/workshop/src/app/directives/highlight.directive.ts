import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  color : string;

  constructor(private el : ElementRef) {
  }

  @HostListener('mouseenter')
  enter() {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave')
  leave() {
    this.changeColor(null);
  }

  private changeColor(color : string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
