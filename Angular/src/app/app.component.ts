import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Authors';
  authors = [];
  newAuthor: any;

  constructor(private _httpService: HttpService) {}

  showMeAuthors() {
    const observable = this._httpService.allAuthors();
    observable.subscribe(data => {
      console.log('this my authors', data);
      this.authors = data['data'];
    });
  }

  addAuthor() {
    const observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log('new author', data);
      this.newAuthor = {name: ''};
      this.showMeAuthors();
    });
  }

}
