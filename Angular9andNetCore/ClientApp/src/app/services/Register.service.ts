import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RegisterService {


  constructor(private http: HttpClient) { }




  getData() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1");
  }
}
