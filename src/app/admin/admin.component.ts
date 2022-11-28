import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { PermissionsService } from '../core/services/permissions/permissions.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    userInformation: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private permissions: PermissionsService,
    private cookieService: CookieService,
    private router: Router
    ) {}


  ngOnInit(): void {
    let permissions = JSON.parse(this.cookieService.get('userInformation'));
    this.userInformation = permissions;
    console.log(permissions);
    
    this.permissions.setUserPermissions(this.userInformation);
  }

  logOut(){
    this.cookieService.delete('userInformation');
    this.router.navigateByUrl('/authentication')
  }

}
