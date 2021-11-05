export interface Projects{
  name:string,
  category:Category
  created:string,
  description:string,
  viewURL:string,
  pic:string[]
}
export enum Category{
  Android = 'Android',
  WebFullStackAngularExpressMySQL ='Web (Full Stack: [Angular , express , MySQL])',
}
