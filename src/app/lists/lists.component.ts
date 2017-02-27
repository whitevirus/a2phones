import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists;
  text; 
  constructor() { }

  ngOnInit() {
    this.lists = [
      {
        text: 'Write some code'
      },
      {
        text: 'Have lunch with Bob'
      },
      {
        text: 'Mow the lawn'
      }
    ];
  }

  addList(){
    this.lists.push({
      text: this.text
    });
  }

  deleteList(listText){
    for(var i = 0;i < this.lists.length;i++){
      if(this.lists[i].text == listText){
        this.lists.splice(i, 1);
      }
    }
  }

}
