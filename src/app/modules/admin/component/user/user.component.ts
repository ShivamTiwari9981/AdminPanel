import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserModel } from 'src/app/interface/IUserModel';
import { IResponse } from 'src/app/interface/iresponse';
import { ApiResponseService } from 'src/app/service/api-response.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public res: IResponse | any;
  selectedFile: File|any;
  UserName = localStorage.getItem('UserName');
  constructor(private response: ApiResponseService) {
    this.GetAllModule();
  }
  GetAllModule() {
    this.response.GetAllData('/User/getAll').subscribe((response) => {
      this.res = response;
      console.log(this.res);
      console.log('this.res.response', this.res.response);
      return this.res;
    });
  }

  ngOnInit() {}
  // url = '../../../../../assets/img/default-150x150.png';
  url = '';
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
    fullName: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    type: new FormControl(),
    userPassword: new FormControl(),
  });
  Submit(){
    var formData=new FormData();
    let model:IUserModel={
      FullName: this.userForm.value.fullName ?? "",
      Mobile: this.userForm.value.mobile ?? "",
      Email: this.userForm.value.email ?? "",
      ImageFile: this.selectedFile,
      Type: this.userForm.value.type,
      UserPassword: this.userForm.value.userPassword,
    }

    formData.append("FullName",this.userForm.value.fullName);
    formData.append("Mobile",this.userForm.value.mobile);
    formData.append("Email",this.userForm.value.email);
    formData.append("ImageFile",this.selectedFile);
    formData.append("Type",this.userForm.value.type);
    formData.append("UserPassword",this.userForm.value.userPassword);
    console.log("formData"+model.FullName)
return false;
  this.response.PostData("/Account/signup",formData).subscribe(
    (response)=>{
          console.log('response',response);
     });
}}
