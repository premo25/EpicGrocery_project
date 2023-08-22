import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private toastr:ToastrService) { }
  // apiUrl=`http://localhost:3000/auth/login`;

  login(data: any):Observable<any>{
    return this.http.post(`${environment.baseUrl}auth/login`,data)
  }

  registerUser(inputData:any):Observable<any>{
    return this.http.post(`${environment.baseUrl}users/register`,inputData)
  }

  
}