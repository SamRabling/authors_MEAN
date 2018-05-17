import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author-form',
  templateUrl: './new-author-form.component.html',
  styleUrls: ['./new-author-form.component.css']
})
export class NewAuthorFormComponent implements OnInit {
  newAuthor: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ''};
  }

  addAuthor() {
    const observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log('new author', data);
      this.newAuthor = { name: '' };
      this._router.navigate(['/']);
    });
  }

}
