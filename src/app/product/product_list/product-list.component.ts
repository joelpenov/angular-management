import { Component, OnInit } from "@angular/core";
import { IProduct } from "../models/product";
import { ProductService } from "../../services/products.service";

@Component({
    selector: 'ms-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  
    constructor(private productService:ProductService) {
          
    }

    ngOnInit(): void {
        this.products = this.productService.getAll();
        this.viewProducts = this.products;
    }

    private showImages:boolean=false;
    pageTitle:string = "Products";
    products: IProduct[];
    viewProducts:IProduct[]=this.products
    
    onNotify(message:string):void{
        this.pageTitle = message;
    }
    
    imagesVisibilityButtonText () {
        this.showImages ? 'Hide images' : 'Show images';
    }    
    
    toggleImagesVisibility=()=>{
        this.showImages = !this.showImages;
    }

    _filterBy:string;    
    get filterBy() : string {
        return this._filterBy;
    }  
    set filterBy(value : string) {
        this._filterBy = value;
        this.viewProducts = this._filterBy ? this.filterProducts(this._filterBy) : this.products;
    }      
    
    filterProducts=(filter:string):IProduct[]=> {
        filter = filter.toLowerCase();
        return this.products.filter(product =>{
            return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
        });
    }
}