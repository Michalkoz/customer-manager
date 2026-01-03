import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title.toUpperCase()}}!</h1>
    {{3+1}}
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title: string = 'customer-manager';

  constructor() {
    setTimeout(
      () => {
        this.title = 'customer-manager-updated after timeout';
            }, 
            3000);
  }

}
