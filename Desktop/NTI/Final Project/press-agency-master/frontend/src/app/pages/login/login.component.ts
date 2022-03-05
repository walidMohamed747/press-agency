import { AuthService } from './../../providers/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg=""
  isSubmitted = false
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(20)])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.isSubmitted=true
    this.msg=""
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe(
        (data)=>{
          console.log(data)
          if(data.data.userRole=="editor"){

            this._router.navigateByUrl("/editor")
          }

          if(data.data.userRole=="viewer"){

            this._router.navigateByUrl("/viewer")
          }
          localStorage.setItem("", data.data.token)
          localStorage.setItem("role", data.data.role)

        },
        (err)=>{
          this.msg="Unauthorized"
        },
        ()=>{
          this._auth.me().subscribe(
            user=>{
              this._auth.isLogin=true
              this._auth.user = user.data
            },
            (e)=>{
              this._auth.isLogin=false
              this._auth.user=null
            },
            ()=>{
              this._router.navigateByUrl("/user")

              this._router.navigateByUrl("/user")

            }
          )
        }
      )
    }
  }

  //function to redirect to viwer page //
isViwier(){

}
//function to redirect to editor page //
isEditor(){
}
}