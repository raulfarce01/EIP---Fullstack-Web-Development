import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGreenOver]'
})
export class GreenOverDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseover')
  private onMouseOver(){
    this.elementRef.nativeElement.style.color = 'green'
  }

}
