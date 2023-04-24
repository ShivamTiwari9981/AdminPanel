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
  submitted=false;
  patternHign: any = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6, 20}$";
constructor(private response:ApiResponseService,private route:Router){}
ngOnInit() {
}
  loginForm = new FormGroup({
    userName: new FormControl('admin@gmail.com',[ Validators.required,Validators.email]),
    // userPassword: new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern(this.patternHign)]),
    userPassword: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    IsRemember: new FormControl(),
  })
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
           this.route.navigateByUrl('/admin/home');
        }
        else{
          alert(this.res.message);
        }
       });
  }
}
