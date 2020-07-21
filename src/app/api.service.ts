import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged, filter,
  map,
  switchMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url = 'https://api.github.com/users';
  client_id = 'SEU CLIENTE ID';
  client_secret = 'SEU CLIENT SECRET';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

 
  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<any> {
    const url = `${this.url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    return this.http.get(url,this.httpOptions)
  }
  getUserRepos(user: string): Observable<any> {
    const url = `${this.url}/${user}/repos?per_page=5&sort=created:%20asc&client_id=${this.client_id}&client_secret=${this.client_secret}`
    return this.http.get(url, this.httpOptions);
  }


  search(query: Observable<string>) {
      return query.pipe(
      map((query: string) => query ? query.trim() : ''),
      debounceTime(400),
      distinctUntilChanged(),
      filter(filter => filter.length > 1),
      switchMap(query => this.getUser(query))
     
    );
}
searchRepos(query: Observable<string>){
  return query.pipe(
    map((query: string) => query ? query.trim() : ''),
    debounceTime(400),
    distinctUntilChanged(),
    filter(filter => filter.length > 1),
    switchMap(query => this.getUserRepos(query))
  );

}

}
