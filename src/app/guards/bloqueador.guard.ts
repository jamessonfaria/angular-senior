import { AppComponent } from './../app.component';
import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, 
    CanDeactivate<AppComponent>, /*CanDeactivate<CoursesListComponent>*/ 
    CanLoad{

  canLoad(route: Route): boolean {
      return false;
  }

  canDeactivate(
    //component: CoursesListComponent, 
    component: AppComponent,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean  {

      console.log(component, currentState, currentRoute, nextState);
      return false;

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      console.log(next, state);

    return false;
  }
  
}
