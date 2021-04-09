import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ){}
  canActivate(route: any, state: any): any {  
      if (localStorage.getItem('token')) {
        return true;
      } else {
        this.router.navigate(["/"], {
          queryParams: {
            returnUrl: state.url
          }
        });
        return false;
      }
  }
}
