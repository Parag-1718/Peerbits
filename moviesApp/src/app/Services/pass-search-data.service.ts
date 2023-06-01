import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassSearchDataService {

  baseUrl = environment.baseurl;
  apiKey = environment.apikey;
  searchForData = environment.search
  public passSearchResult = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) { }


  setData(data: any) {
    this.passSearchResult.next(data);
  }

  getData() {
    return this.passSearchResult.asObservable();
  }

  getSearchResults(params:any){
    params.api_key = this.apiKey
    return this.http.get(this.baseUrl+this.searchForData, {params})
  }

  getSearchDeatils(id:any){
   const params = {
    api_key: this.apiKey
   }
    return this.http.get(`${this.baseUrl}/movie/${id}`, {params})
  }
}
