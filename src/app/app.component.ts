import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    
    <h1 [style.color]="nameColor" [class.isActive]="isActive">Welcome to "{{title.toUpperCase()}}"!</h1>

    <img [src]="photoUrl" alt="CustomerImage"/>
    <router-outlet />
  `,
  styles: [
    '.isActive { text-decoration: underline; }'
  ],
})
export class AppComponent {
  title: string = 'customer-manager';
  nameColor: string = "blue";
  photoUrl: string = "assets/images/customer2.jpg";
  isActive: boolean = true;

  constructor() {}
}
