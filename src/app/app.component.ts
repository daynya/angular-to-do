import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Read Angular docs', done: true },
    { description: 'Build Angular Tic Tac Toe', done: true },
    { description: 'Build Angular To Do', done: false },
    { description: 'Get on the nice list', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.push({
      description,
      done: false
    });
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
