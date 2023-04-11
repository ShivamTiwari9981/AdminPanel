import { Component } from '@angular/core';
import { ApiResponseService } from '../../../../service/api-response.service';
import { IResponse } from 'src/app/interface/iresponse';

@Component({
  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public res:IResponse|any;
  UserName=localStorage.getItem('UserName');
  constructor(private response: ApiResponseService){
    this.GetAllModule();
  }

  GetAllModule(){
    this.response.GetAllData("/Module/modules").subscribe(
      (response) => { this.res = response;
        console.log(this.res)
        console.log("this.res.response",this.res.response)
        return this.res;


       });
  }
}
