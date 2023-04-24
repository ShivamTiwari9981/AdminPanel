import { Injectable } from '@angular/core';
import{ApiResponseService} from '../api-response.service'
import { IResponse } from 'src/app/interface/iresponse';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  apiResponse: IResponse | any;
  constructor(private res :ApiResponseService) { }
  GetAllRole() {
    return this.res.GetAllData('/Role/getRole')
    }
    AddRole(model:object){
    this.res.PostData("/Role/add",model);
  }
GetString(){
  return "hello"
}
}
