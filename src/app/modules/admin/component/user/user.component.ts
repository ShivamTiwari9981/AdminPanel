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
  constructor(private response: ApiResponseService) {
    this.GetAllModule();
  }
  GetAllModule() {
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
    fullName: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    type: new FormControl(),
    userPassword: new FormControl(),
  });
  Submit(){
     var formData=new FormData();
    let model={
      FullName: this.userForm.value.fullName ?? "",
      Mobile: this.userForm.value.mobile ?? "",
      Email: this.userForm.value.email ?? "",
      ImageFile: this.selectedFile,
      Type: this.userForm.value.type,
      UserPassword: this.userForm.value.userPassword,
    }
    formData.append("FullName",model.FullName);
    formData.append("Mobile",model.Mobile);
    formData.append("Email",model.Email);
    formData.append("ImageFile",this.selectedFile);
    formData.append("Type",model.Type);
    formData.append("UserPassword",model.UserPassword);
    this.response.PostData("/User/add",formData).subscribe(
    (response)=>{
      console.log('response',response);
      this.GetAllModule();

     });
}
}
