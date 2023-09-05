import { Component } from '@angular/core';

@Component({
  selector: 'app-click-header',
  templateUrl: './click-header.component.html',
  styleUrls: ['./click-header.component.css']
})
export class ClickHeaderComponent {
  message = 'Click me!';

  alert() {
    alert('Very important message!');
  }
}
