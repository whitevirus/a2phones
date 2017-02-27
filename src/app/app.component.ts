import { Component } from '@angular/core';
import { ListsComponent} from './lists/lists.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListsComponent]
})
export class AppComponent {
  title = 'List App';
}
