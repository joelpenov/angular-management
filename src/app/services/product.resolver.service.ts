import { Resolve } from "@angular/router";
import { ProductService } from "./products.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolver implements Resolve<any> {
    
    constructor(private productsService:ProductService) {

    }

    resolve() {
        return this.productsService.getAll();
    }
}