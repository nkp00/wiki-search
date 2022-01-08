import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  searchTerm = '';
  timerId: any;
  constructor() {}

  ngOnInit(): void {}
  onInput(event: any) {
    event.preventDefault();
    this.searchTerm = event?.target?.value;
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.submit();
    }, 1000);
  }
  submit() {
    this.onSearch.emit(this.searchTerm);
  }
}
