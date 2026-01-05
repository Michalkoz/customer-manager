import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to "{{title.toUpperCase()}}"!</h1>
    <img [src]="photoUrl" alt="CustomerImage"/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title: string = 'customer-manager';
  photoUrl: string = "assets/images/customer2.jpg";

  constructor() {}
}
