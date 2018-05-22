import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardServiceService implements CanActivate {

    constructor(private _router:Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let productId:number = +route.url[1].path;
        let isValidUrl:boolean = !isNaN(productId) || productId > 0; 
        if(isValidUrl) return true;
        this._router.navigate(['/'])
    }
}
