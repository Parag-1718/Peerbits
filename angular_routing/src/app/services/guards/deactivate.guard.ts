import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/edit-user/edit-user.component';

export interface AreYouSure{
  wantToExit: () => boolean
}

@Injectable({
  providedIn: 'root'
})


export class DeactivateGuard implements CanDeactivate<AreYouSure> {
  canDeactivate(
    component: AreYouSure,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.wantToExit();
  }
  
}
