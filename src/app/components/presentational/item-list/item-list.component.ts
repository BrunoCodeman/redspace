import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  @Input() items: BehaviorSubject<Array<Item>> = new BehaviorSubject(new Array());
  isLoadingData = true;
  constructor() { }

  ngOnInit(): void {
    this.items.subscribe((data) => {
      this.isLoadingData = false;
    });
  }
  ngOnDestroy(){
    this.items.unsubscribe();
  }

}
