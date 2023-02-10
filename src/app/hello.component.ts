import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>{{name}}!</p>`,
  styles: [`p { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
