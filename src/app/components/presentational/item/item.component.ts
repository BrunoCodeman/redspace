import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() icon = "help";
  @Input() title = "Item";
  @Input() link = "";
  constructor() { }

  ngOnInit(): void {
  }

}
