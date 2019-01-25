import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `<div><span class="a2-span">hello from a2</span></div>`,
  styles: [`
    body{
      padding:0;
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
  `],
})
export class AppComponent {
  title = 'ae';
}
