import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[buttonEffect]',
  standalone: true
})
export class ButtonEffectDirective implements OnInit  {

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundImage = 'linear-gradient(0deg, #71081e 0%, #d7485c 100%)'
  }

  @HostListener('mouseover')
 hoverButton(): void {
    this.element.nativeElement.style.boxShadow = '0 5px 9px 1px rgba(130, 19, 40, 0.5)'
  }
  @HostListener('mouseout')
  defaultButton(): void {
    this.element.nativeElement.style.boxShadow = 'none'
  }



}
