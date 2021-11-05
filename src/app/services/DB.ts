import { Injectable } from '@angular/core';
import {Projects , Category} from "../dto/project.dto"

@Injectable()
export class DB {
  category = [ Category.Android , Category.WebFullStackAngularExpressMySQL];
  project:Projects[] = [
    {
      name: 'safahaty.com',
      category:Category.WebFullStackAngularExpressMySQL,
      created: '2020-04-24',
      description:"An application for selling university books that replaces the university library, which requires walking and it takes time",
      viewURL:"",
      pic: [
        './assets/images/safahatyComMainPage.png',
        './assets/images/safahatyComMainPageMobile.jpg',
      ],
    },
    { name: 'superC', category:Category.Android , created: '2019-04-10', description: "An application for calculating the area and perimeter of geometric shapes" , viewURL:"" , pic: ['./assets/images/culc_pic.jpg']},
  ];

  constructor() {}

  getCategory() {
    return this.category;
  }
  getProject() {
    return this.project;
  }
  getEven(flag) {
    let category;
    if (flag == 'category') {
      category = this.getCategory();
    } else {
      category = this.getProject();
    }

    let even = [];
    for (let i = 0; i < category.length; ++i) {
      if (i % 2 == 0) {
        even.push(category[i]);
      }
    }
    return even;
  }
  getOdd(flag) {
    let category;
    if (flag == 'category') {
      category = this.getCategory();
    } else {
      category = this.getProject();
    }
    let odd = [];
    for (let i = 0; i < category.length; ++i) {
      if (i % 2 != 0) {
        odd.push(category[i]);
      }
    }
    return odd;
  }
  getUrl(filter?:string) {
    let url = [];
    this.getProject().forEach((data) => {
      if((filter && data.category == filter) || !filter){
        data.pic.forEach((image) => {
          url.push(image);
        });
      }
    });
    return url;
  }
}
