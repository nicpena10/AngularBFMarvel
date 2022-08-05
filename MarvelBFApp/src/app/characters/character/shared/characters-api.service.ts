import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, withLatestFrom } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  
  KEY_PUBLIC='b89f628fb69a529a5a336c2521df8fec';
  KEY_PRIVATE='7d4db55b74ec34de55396236faa4a792b3674851'
  // 17d4db55b74ec34de55396236faa4a792b3674851b89f628fb69a529a5a336c2521df8fec
  HASH='cc86ba33514a93b7ef86fe55b177fab0';
  // KEY_PUBLIC='8f6120ce481405e253289d8cf23b2b22';
  // KEY_PRIVATE='d80b3f48527e0e3d068eab1f75a13d4132a343a6'
  // // 1d80b3f48527e0e3d068eab1f75a13d4132a343a68f6120ce481405e253289d8cf23b2b22
  // HASH='8d893590c2e147be85c5841a8b19d9a6';
  URL=`https://gateway.marvel.com:443/v1/public/characters`;

 
  Url_final ='';
  constructor(private http: HttpClient) { 

  }
  getTodos(): Observable<any>{
    this.Url_final=this.URL + `?ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
    return this.http.get<any>(this.Url_final)
                    .pipe(map((data :any) => data.data.results))
  }
  getTodosv2(): Observable<any>{
    this.Url_final=this.URL + `?ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
    return this.http.get<any>(this.Url_final)
                    .pipe(map((data :any) => data.data.results))
  }
  
  
  // getbyname(): Observable<any>{
  //   this.Url_final=this.URL + `name=Abyss&ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;  
    
  //   return this.http.get<any>(this.Url_final)
  //   .pipe(map((data :any) => data.data.results));
  // }
  getbyname(name:string): Observable<any>{
    
    this.Url_final=this.URL + `?${name}&ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;      
    //console.log(this.Url_final);
    return this.http.get(this.Url_final).pipe(map((data :any) => data.data.results));
  }
  //https://gateway.marvel.com:443/v1/public/characters/1009149/comics?apikey=8f6120ce481405e253289d8cf23b2b22
  getcomicsbyUserId(ID:number){
    this.Url_final=this.URL + `/${ID}/comics?ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;      
    //console.log(this.Url_final);
    return this.http.get(this.Url_final).pipe(map((data :any) => data.data.results));
  }
//https://gateway.marvel.com:443/v1/public/characters/1009149/series?apikey=8f6120ce481405e253289d8cf23b2b22
  getSeriesbyUserId(ID:number){
    this.Url_final=this.URL + `/${ID}/series?ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;      
    //console.log(this.Url_final);
    return this.http.get(this.Url_final).pipe(map((data :any) => data.data.results));
  }
  //https://gateway.marvel.com:443/v1/public/characters/1009149/stories?apikey=8f6120ce481405e253289d8cf23b2b22
  getHistoriabyUserId(ID:number){
    this.Url_final=this.URL + `/${ID}/stories?ts=1&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;      
    //console.log(this.Url_final);
    return this.http.get(this.Url_final).pipe(map((data :any) => data.data.results));
  }
}
