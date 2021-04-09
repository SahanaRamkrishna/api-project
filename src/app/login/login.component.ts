import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public keyword;
  constructor(
    private auth: AuthenticationService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }

  login(): any {
    const post_data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(post_data)
    this.auth.login(post_data).subscribe(this.loginProcessData.bind(this));
  }
  loginProcessData(data: any) {

    console.log(data);

    localStorage.setItem('token', data.token);

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.router.navigate([params.returnUrl]);
    });
  }
}
