import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserModel } from 'src/app/interface/IUserModel';
import { IResponse } from 'src/app/interface/iresponse';
import { ApiResponseService } from 'src/app/service/api-response.service' 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  isVisible=false;
  submitted=false;
  public res: IResponse | any;
  selectedFile: File|any;
  constructor(private response: ApiResponseService) {
    this.GetAllUser();
  }
  GetAllUser() {
    this.response.GetAllData('/User/getAll').subscribe((response) => {
      this.res = response;
      // console.log(this.res)
      return this.res;
    });
  }

  ngOnInit() {}
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
          alert(this.res.message);
        }
        else{
          alert(this.res.message)
        }
        this.GetAllUser();
       });
}
}
