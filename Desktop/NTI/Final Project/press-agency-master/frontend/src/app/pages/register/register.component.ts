import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg =''
isSubmitted =false 
  registerForm : FormGroup = new FormGroup ({
    firstName : new FormControl('',[ Validators.required]),
    lastName : new FormControl('',[ Validators.required]),
    email : new FormControl('',[Validators.email , Validators.required]),
    password : new FormControl('',[Validators.minLength(3)]), 
    birthDate : new FormControl('',[Validators.required]), 
    userRole :new FormControl('',[Validators.required ]) 
  })
  constructor( private _auth : AuthService,  private _router : Router ) { }

  ngOnInit(): void {
  }
register(){
  this.isSubmitted=true
  if(this.registerForm.valid){
    this._auth.register(this.registerForm.value).subscribe((data)=>
    {console.log(data)},(err)=>{this.msg="Unauthorized"},
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
