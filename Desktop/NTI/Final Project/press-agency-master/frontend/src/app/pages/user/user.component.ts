import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/providers/auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
posts : Post[] =[]

  constructor(private _auth : AuthService , private routr : Router ) { }

  ngOnInit(): void {
  }

}

