import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginModel } from 'src/app/interface/iloginModel';
import { ApiResponseService } from 'src/app/service/api-response.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  res:any;
constructor(private response:ApiResponseService,private route:Router){}
ngOnInit() {
}


  loginForm = new FormGroup({
    userName: new FormControl('admin@gmail.com', Validators.required),
    userPassword: new FormControl('1234', [Validators.required, Validators.maxLength(8)]),
    IsRemember: new FormControl(),
  })
  Submit(){
    localStorage.setItem('IsRemember', JSON.stringify(this.loginForm.value.IsRemember));
    let loginData:ILoginModel={
      Email:this.loginForm.value.userName??"",
      Password:this.loginForm.value.userPassword??"",
      Remember:this.loginForm.value.IsRemember,
    }
    this.response.PostData("/Account/login",loginData).subscribe(
      (response) => { this.res = response;
        console.log(this.res);
        console.log(this.res.response.firstName);
        if(this.res.status==true)
        {
          if(loginData.Remember)
          {
            localStorage.setItem('userName', loginData.Email);
            localStorage.setItem('userPassword', loginData.Password);
            localStorage.setItem('IsRemember', JSON.stringify(loginData.Remember));
          }
          else{
            localStorage.removeItem('userName');
            localStorage.removeItem('userPassword');
            localStorage.removeItem('IsRemember');
          }
          localStorage.setItem('UserName',this.res.response.firstName);
           this.route.navigateByUrl('/admin/home');
        }
        else{
          alert(this.res.message);
        }
       });
  }
}
