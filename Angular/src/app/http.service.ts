import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allAuthors() {
    return this._http.get('/authors');
  }

  addAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor);
  }

  editAuthor(id: string, updatedAuthor) {
    return this._http.post(`/authors/${id}`, updatedAuthor);
  }

  deleteAuthor(id: string, destroyedAuthor) {
    return this._http.post(`/authors/remove/${id}`, destroyedAuthor);
  }
}
