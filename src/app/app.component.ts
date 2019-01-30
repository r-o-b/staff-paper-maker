import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  count = 4;

  onChange(event: any) {
    this.count = event.target.value;
  }

}
