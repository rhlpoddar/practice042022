import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeTexto]'
})
export class ChangeTextoDirective {

  constructor(Element:ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive. ";

   }

}
