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
    console.log('got data', updatedAuthor);
    return this._http.post(`/authors/${id}`, updatedAuthor);
  }

  oneAuthor(id: string) {
  return this._http.get(`/authors/${id}`);
  }

  deleteAuthor(id: string, destroyedAuthor) {
    return this._http.post(`/authors/remove/${id}`, destroyedAuthor);
  }
}
