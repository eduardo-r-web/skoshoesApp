import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor( private cookieService: CookieService,
    private router: Router ){
  }

  canActivate(): boolean {
    if(!this.cookieService.get('userInformation')){
      this.router.navigateByUrl('/')
    }
    return (this.cookieService.get('userInformation')) ? true : false;
  }
  
}
