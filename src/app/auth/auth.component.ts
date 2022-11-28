import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PermissionsService } from '../core/services/permissions/permissions.service';
import { UsersService } from '../core/services/users/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  form = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private permissions: PermissionsService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if( this.form.valid ){
      let login = this.usersService.login(this.form.value);
      console.log(login);
      if(login){
        this.permissions.setUserPermissions(login);
        this.cookieService.set('userInformation', JSON.stringify(login));
        this.router.navigateByUrl('/admin');
      }
    }else{
      this.form.markAllAsTouched();
    }
  }

}
