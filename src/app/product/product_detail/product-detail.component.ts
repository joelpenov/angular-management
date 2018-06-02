import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/products.service";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../models/product";
import { ToastrService } from "../../services/toastr.service";

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    
    private productId:string;
    product:IProduct;

    constructor(private _productService: ProductService, private _route:ActivatedRoute, private toastr:ToastrService) {
        this.productId =  _route.snapshot.paramMap.get('id');
    }

    hasMoreThanThreeStars():boolean{
        let hasMoreThanThreeStars:boolean= this.product.starRating >= 3;
        
        if(!hasMoreThanThreeStars){
            this.toastr.error(`"${this.product.productName.trim()}" has less than three stars`, "Cannot be moved.");
            
        }
        return hasMoreThanThreeStars;
    }

    ngOnInit(): void {
        this._productService.getById( parseInt(this.productId)).subscribe(product => {
            this.product = product;
        })
    }
}