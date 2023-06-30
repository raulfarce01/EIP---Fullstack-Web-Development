import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public name = 'Paloma'

  public numbers= [1,2,3,4]

  // public user = {
  //   name: 'Juan',
  //   surname: 'Gonzalez',
  //   age: 17,
  // }

  public users = [
    {
      name: 'Paloma',
      surname: 'Mendez',
      age: 21,
      grade: 4,
    },
    {
      name: 'Juan',
      surname: 'Gonzalez',
      age: 17,
      grade: 7,
    },
    {
      name: 'Luis',
      surname: 'Rodriguez',
      age: 12,
      grade: 10,
    },
    {
      name: 'Marta',
      surname: 'Santiago',
      age: 19,
      grade: 1,
    },
  ]

  // public getFullName() {
  //   return this.user.name + ' ' + this.user.surname
  // }

}
