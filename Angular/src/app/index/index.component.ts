import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.showMeAuthors();
    }

    showMeAuthors() {
    const observable = this._httpService.allAuthors();
    observable.subscribe(data => {
      console.log('this my authors', data);
      this.authors = data['data'];
    });
  }

    removeAuthor(id: string) {
      console.log(id);
      const observable = this._httpService.deleteAuthor(id);
      observable.subscribe(data => {
        console.log('delete task', data);
        this.showMeAuthors();
      });
    }
}
