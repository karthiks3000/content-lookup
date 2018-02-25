import { Directive,  ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderScore]'
})
export class UnderScoreDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addUnderScore();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeUnderScore();
  }

  private addUnderScore() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }
  private removeUnderScore() {
    this.el.nativeElement.style.textDecoration = '';
  }
}
