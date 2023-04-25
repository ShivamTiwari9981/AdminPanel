import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserModel } from 'src/app/interface/IUserModel';
import { IResponse } from 'src/app/interface/iresponse';
import { ApiResponseService } from 'src/app/service/api-response.service' ;
import{SuccessNotification,FailedNotification} from '../../../../../app/notification.js'
import { RoleService } from 'src/app/service/role/role.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  isVisible=false;
  submitted=false;
  roles:any;
  public res: IResponse | any;
  selectedFile: File|any;
  constructor(private response: ApiResponseService,private role:RoleService) {
    this.GetAllUser();
  }
  GetAllUser() {
    this.response.GetAllData('/User/getAll').subscribe((response) => {
      this.res = response;
      return this.res;
    });
  }
  url = '../../../../../assets/img/default-150x150.png';
  onImageChange(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.selectedFile=e.target.files[0];
        this.url = event.target.result;
      };
    }
  }
  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.maxLength(20)]), 
    mobile: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    type: new FormControl(''),
    userPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });
  
  Submit(){
    this.submitted=true;
    if(this.userForm.invalid)
    {
      return;
    }
     var formData=new FormData();
    let model={
      FullName: this.userForm.value.fullName ?? "",
      Mobile: this.userForm.value.mobile ?? "",
      Email: this.userForm.value.email ?? "",
      ImageFile: this.selectedFile,
      Type: this.userForm.value.type??"",
      UserPassword: this.userForm.value.userPassword??"",
    }
    formData.append("FullName",model.FullName);
    formData.append("Mobile",model.Mobile);
    formData.append("Email",model.Email);
    formData.append("ImageFile",this.selectedFile);
    formData.append("Type",model.Type);
    formData.append("UserPassword",model.UserPassword);
    this.response.PostData("/User/add",formData).subscribe(
      (response) => { this.res = response;
        if(this.res.status==true)
        {
          this.RefreshModel()
          SuccessNotification(this.res.message);
        }
        else{
          FailedNotification(this.res.message);
        }
        this.GetAllUser();
       });
      }
  RefreshModel(){
    this.userForm = new FormGroup({
      fullName: new FormControl(''), 
      mobile: new FormControl(''),
      email: new FormControl(''),
      type: new FormControl(),
      userPassword: new FormControl(''),
    });
    this.url = '../../../../../assets/img/default-150x150.png'
    this.selectedFile='';
  }
  GetAllRole()
  {
    this.role.GetAllRole().subscribe((response) => {
      return response;
    });
  }
}
