import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IResponse } from 'src/app/interface/iresponse';
import{RoleService} from 'src/app/service/role/role.service'
import{SuccessNotification,FailedNotification,HideModel} from '../../../../notification.js'
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  submitted=false;
  title = 'Role';
  apiResponse: IResponse | any;
  constructor(private roleRes: RoleService) {
    this.roleRes.GetAllRole().subscribe((response) => {
      this.apiResponse = response;
      return this.apiResponse;
    });
  }
 roleForm = new FormGroup({
    roleName: new FormControl('',[Validators.required, Validators.maxLength(20)]), 
    roleId: new FormControl('0'), 
  });
  Submit(){
    this.submitted=true;
    if(this.roleForm.invalid)
    {
      return;
    }
    let model={
      RoleId: this.roleForm.value.roleId,
      RoleName: this.roleForm.value.roleName ?? "",
    }
      this.apiResponse=this.apiResponse.AddRole(model);
    if(this.apiResponse.status==true)
    {
      this.RefreshModel();
      HideModel();
      SuccessNotification(this.apiResponse.message);
    }
    else{
      HideModel();
      FailedNotification(this.apiResponse.message);
    }
  }
    RefreshModel(){
    this.roleForm = new FormGroup({
      roleId: new FormControl('0'), 
      roleName: new FormControl(''), 
    });
  }
  EditValue(data:any){
    this.roleForm = new FormGroup({
      roleName: new FormControl(data.roleName), 
      roleId: new FormControl(data.roleId), 
    });
  }
}
  

