import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appSelect]'
})
export class SelectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Get the clicked option of avatar
  @HostListener('click', ['$event.target.id'])
  onClick( e ) {
    this.applyCheck(this.el.nativeElement);
  }

  // Apply the border to clicked one
  applyCheck( element ) {
    const options: any = document.getElementsByName('avatar');
    for ( const ref of options ) {
      this.renderer.addClass(ref, 'noBorde');
      this.renderer.removeClass(ref, 'bordeSolido');
    }
    this.renderer.addClass(element, 'bordeSolido');
    this.renderer.removeClass(element, 'noBorde');
  }

}