import { Component } from '@angular/core';
import { DB } from './services/DB';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
})
export class WorksComponent {
  projects = this.db.project
  even = this.db.getEven("project")
  odd = this.db.getOdd("project")
  title = 'CV';
  constructor(private db : DB) {}
}
