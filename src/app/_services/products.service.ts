import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/products';

const fruitUrl= 'http://localhost:8080/api/products/fruits';

const vUrl= 'http://localhost:8080/api/products/vegetables';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getFruits(){
    return this.http.get(fruitUrl);
  }

  getVegetables(){
    return this.http.get(vUrl);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }


  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name) {
    return this.http.get(`${baseUrl}?name=${name}`);
  }

  
}
