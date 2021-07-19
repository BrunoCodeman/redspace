import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  @Output("searchTerm") searchTerm: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchResults = new BehaviorSubject<Array<Item>>([]);

  value = "";
  constructor() {  }

  ngOnInit(): void { 
   }

  typeSearch(event: KeyboardEvent) {
    if (this.value.length > 2) {
      this.searchTerm.emit(this.value);
    }
  }

  clearData($event: any) {
    this.value = '';
    this.searchResults.next([]);
  }
}
