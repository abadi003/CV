import { Component } from '@angular/core';
import { DB } from './services/DB';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
})
export class GallaryComponent {
  url = this.db.getUrl();
  categories = this.db.getCategory()
  title = 'CV';
  constructor(private db: DB) {}

  getImage(filter?:string){
    this.url =this.db.getUrl(filter)
  }
}
