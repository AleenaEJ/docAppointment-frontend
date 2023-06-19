import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username :string | undefined;
  password:string| undefined
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
  //   // console.log(this.username + ' ' + this.password );

    if (this.password ==='admin' && this.username === 'admin') {

      this.router.navigate(['/adminHome']);

    } else if (this.password === 'user' && this.username === 'user') {
      this.router.navigate(['/userhome']);
    }
  }


}
