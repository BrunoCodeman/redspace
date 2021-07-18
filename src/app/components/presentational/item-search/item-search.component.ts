import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  @Input() url = "";
  value = "";
  items = [
    {title:"Luke Skywalker", icon:"public", link:"/blabla/1"},
    {title:"Princess Lea", icon:"public", link:"/blabla/1"},
    {title:"Obi Wan Kenobi", icon:"public", link:"/blabla/1"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
