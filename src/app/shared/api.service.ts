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
    return this.http.post<any>("http://localhost:1988/userData",data, {
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
    return this.http.get<any>("http://localhost:1988/userData").pipe(map((res:any)=>{
      return res;
    }))
  }
  putData(data:any,id:number){
    return this.http.put<any>(`http://localhost:1988/userData/${id}`,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(id:number){
    return this.http.delete<any>(`http://localhost:1988/userData/${id}`).pipe(map((res:any)=>{
      return res;
    }))
  }
}
