import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  toastr: any;

  constructor(private http: HttpClient) { }

//   showSuccess(message: any, title: any){
//     this.toastr.success(message, title)
// }

  baseUrl = environment.baseUrl;

  public Users() {
    return this.http.get<any>(`${this.baseUrl}`+ "posts")
  
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////


  url = "http://localhost:3000/posts";

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post('  http://localhost:3000/posts', formParams)
  } 

  getcall(){
    return this.http.get(this.url) 
  }
  adduser(data: any){
    // console.log("data",data);
    return this.http.post(this.url,data);

  
  }}
