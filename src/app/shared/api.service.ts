import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postData(data:any){
    console.log("from post",data);
    return this.http.post<any>(" https://angularserverapp.herokuapp.com/userData",data, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res:any)=>{
      return res;
    }));
  } 
  getData(){
    return this.http.get<any>(" https://angularserverapp.herokuapp.com/userData",{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res:any)=>{
      return res;
    }))
  }
  putData(data:any,_id:string){
    return this.http.put<any>(` https://angularserverapp.herokuapp.com/userData/${_id}`,data,{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': 'Access-Control-Request-Headers' // This is empty
          }
        )
    }).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(_id:string){
    return this.http.delete<any>(` https://angularserverapp.herokuapp.com/userData/${_id}`,{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyToken': 'Access-Control-Request-Headers',
            'Access-Control-Allow-Methods': ' DELETE',
          }
        )
    }).pipe(map((res:any)=>{
      return res;
    }))
  }
}
