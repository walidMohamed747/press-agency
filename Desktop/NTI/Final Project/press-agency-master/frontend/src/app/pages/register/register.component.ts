import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup = new FormGroup ({
    firstName : new FormControl(['' , Validators.required]),
    lastName : new FormControl(['', Validators.required]),
    email : new FormControl([Validators.email , Validators.required]),
    password : new FormControl([Validators.minLength(3)]), 
    birthDate : new FormControl(['',Validators.required]), 
    userRole :new FormControl(['',Validators.required ]) 
  })
  constructor( private _http : AuthService) { }

  ngOnInit(): void {
  }
register(){
  
}
}
