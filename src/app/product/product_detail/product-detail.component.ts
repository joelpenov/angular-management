import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/products.service";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../models/product";

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    
    private productId:string;
    product:IProduct;

    constructor(private _productService: ProductService, private _route:ActivatedRoute) {
        this.productId =  _route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this._productService.getById( parseInt(this.productId)).subscribe(product => {
            this.product = product;
        })
    }
}