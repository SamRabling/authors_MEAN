import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit_author = {name: ''};
  id: string;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.edit_author = { name: '' };
  }

  editAuthor(id: string) {
    const observable = this._httpService.editAuthor(this.id, this.edit_author);
      observable.subscribe(data => {
        console.log('updated task', data);
        this.edit_author = { name: '' };
        this._router.navigate(['/']);
      });
  }
}
