import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './core/guards.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./desk/desk.module').then( m => m.DeskModule )
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
    canActivate: [ GuardsGuard]
  },
  {
    path: 'authentication',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
