import { Component } from '@angular/core';
import { DB } from './services/DB';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  even = this.db.getEven("category")
  odd = this.db.getOdd("category")
  title = 'CV';

  constructor(private db :DB){
  }
}
