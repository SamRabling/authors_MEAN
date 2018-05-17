import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit_author = {name: ''};
  id: string;
  private author_params: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.edit_author = { name: '' };
    this.author_params = this._route.params.subscribe(params =>
    this.id = params['id']
  );
  }

  editAuthor() {
    const observable = this._httpService.editAuthor(this.id, this.edit_author);
      console.log(this.id);
      observable.subscribe(data => {
        console.log('updated task', data['message']);
        this.edit_author = { name: '' };
        console.log(this.edit_author);
        this._router.navigate(['/']);
      });
  }
}
