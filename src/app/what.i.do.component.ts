import { Component } from '@angular/core';
import { DB } from "../app/services/DB"

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what.i.do.component.html',
})
export class WhatIDoComponent {
  category = this.db.getCategory()
  title = 'CV';
  constructor(private db : DB){

  }

}
