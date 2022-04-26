import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username:string= "";
  password:string= "";
  
  constructor() { }

  ngOnInit(): void {
  }
  
  LoginUser()
  {
     if(this.username == "Admin" && this.password == "admin123")

     console.log("Welcome");
  }
}
