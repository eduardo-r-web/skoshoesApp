import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersList = [
    {
      username: 'juan eduardo rodriguez',
      password: '123456',
      role: 'Administrador'
    },
    {
      username: 'prueba',
      password: '123456',
      role: 'Vendedor'
    }
  ]
  constructor() { }

  getUsers(){
    return this.usersList;
  }

  login( userForm: any ){
    return this.usersList.find( (user: any) => user.username === userForm.username && userForm.password === userForm.password);
    
  }
}
