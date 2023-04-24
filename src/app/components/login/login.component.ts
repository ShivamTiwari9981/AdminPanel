import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginModel } from 'src/app/interface/iloginModel';
import { ApiResponseService } from 'src/app/service/api-response.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  res:any;
  submitted=false;
  toastNode:any;
  loginForm:any;
  patternHign: any = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6, 20}$";
constructor(private response:ApiResponseService,private route:Router,private cookie:CookieService){}
ngOnInit() {
  const _IsRemember= this.cookie.get("remember");
  console.log(_IsRemember);
  if(_IsRemember=="true" && _IsRemember!=null)
  {
    this.loginForm = new FormGroup({
      userName: new FormControl(this.cookie.get("email")),
      userPassword: new FormControl(this.cookie.get("password")),
      IsRemember: new FormControl(true),
    })
  }
  else{
    this.loginForm = new FormGroup({
      userName: new FormControl('',[ Validators.required,Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      IsRemember: new FormControl(),
    })
  }
}

  Submit(){
    this.submitted=true;
    if(this.loginForm.invalid)
    {
      return;
    }
    let loginData:ILoginModel={
      Email:this.loginForm.value.userName??"",
      Password:this.loginForm.value.userPassword??"",
      Remember:this.loginForm.value.IsRemember,
    }
    this.response.PostData("/Account/login",loginData).subscribe(
      (response) => { this.res = response;
        if(this.res.status==true)
        {
          if(loginData.Remember==true && loginData.Remember!=null)
          {
            this.cookie.set("email",loginData.Email);
            this.cookie.set("password",loginData.Password);
            this.cookie.set("remember",loginData.Remember.toString());
          }
          else{
            this.cookie.deleteAll();
          }
            this.route.navigateByUrl('/admin/home');
        }
        else{
          alert(this.res.message);
        }
       });
  }


}
