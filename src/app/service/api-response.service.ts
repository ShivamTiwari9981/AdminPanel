import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IResponse } from '../interface/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {
  _url="https://localhost:7116/api";
  responseVm:IResponse | undefined;
  constructor(private httpClient:HttpClient) { }
  public GetAllData(url:string)
  {
   return this.httpClient.get(this._url+url);
  }
  public GetDataById(url:string,id:number)
  {
   return this.httpClient.get(this._url+url);
  }
  public UpdateDataById(url:string)
  {
   return this.httpClient.get(this._url+url);
  }
  public PostData(url:string,data:any)
  {
    let a=this._url+url;
   return this.httpClient.post(this._url+url,data)
  }
}
