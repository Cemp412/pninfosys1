import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TempService {
  url="http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }
  saveContact(data)
  {
    //console.log(data)
    return this.http.post(this.url+'addcontactform',data)
  }

  saveRegister(data2)
  {
    //console.log(data)
    return this.http.post(this.url+'register',data2)
  }
}
