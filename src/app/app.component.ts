import { Component } from '@angular/core';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchList: any[] = [];
  isInProgress = false;
  constructor(private wiki: WikiService) {}
  search(searchTerm: string) {
    if (searchTerm) {
      this.isInProgress = true;
      this.wiki.search(searchTerm).subscribe((result: any) => {
        this.searchList = result?.query?.search;
        this.isInProgress = false;
      });
    } else {
      this.searchList = [];
    }
  }
}
