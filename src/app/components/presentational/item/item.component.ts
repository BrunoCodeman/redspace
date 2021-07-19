import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../models/item'
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data: Item = {} as Item;
  constructor(public router: Router) { }

  ngOnInit(): void {}

  navigate(){
    this.router.navigate([`/${this.data.route}`], {state:{data: this.data.model}});
  }
}
