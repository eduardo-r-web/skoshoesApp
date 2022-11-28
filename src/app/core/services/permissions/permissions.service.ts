import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  
  private userPermissions  = new BehaviorSubject<any>([]);
  userPermissions$ = this.userPermissions.asObservable();

  constructor() { }

  setUserPermissions( permissions: any ): void{
    this.userPermissions.next(permissions);
  }
}
