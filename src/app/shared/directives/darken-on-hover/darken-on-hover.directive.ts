import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]' 
    // Seletor entre colchetes para diretiva funcionar como atributo de uma tag
    // Ex.: <a apDarkOnHover></a>
})
export class DarkenOnHoverDirective { 
    constructor(private el: ElementRef,
        private render: Renderer2) {}

        @Input() brightness = '70%';
        
    @HostListener('mouseover')
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
 
    }
    @HostListener('mouseleave')
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}