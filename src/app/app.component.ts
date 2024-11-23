import { Component } from '@angular/core';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'upgraded-winner';
  version = packageJson.version;
}
