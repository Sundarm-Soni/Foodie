import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  constructor(private elref: ElementRef){}
  @HostListener('document: click',['$event']) toggleDropdown(event: Event){
    
    this.isOpen = this.elref.nativeElement.contains(event.target) ? !this.isOpen: false;
  }
}
