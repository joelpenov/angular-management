import { Component, OnInit } from "@angular/core";
import { IProduct } from "../models/product";
import { ProductService } from "../../services/products.service";

@Component({
    selector: 'sm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  
    constructor(private _productService:ProductService) {
          
    }

    private showImages:boolean=false;
    pageTitle:string = "Products";
    products: IProduct[];
    viewProducts:IProduct[]=this.products
    _filterBy:string;    
   
    ngOnInit(): void {
        this._productService.getAll()
         .subscribe(products => {
            this.products = products;
            this.viewProducts = products;
         });
    }

    onNotify(message:string):void{
        this.pageTitle = message;
    }
    
    imagesVisibilityButtonText ():string {
        return  this.showImages ? 'Hide images' : 'Show images';
    }    
    
    toggleImagesVisibility():void{
        this.showImages = !this.showImages;
    }

    get filterBy() : string {
        return this._filterBy;
    }  
    set filterBy(value : string) {
        this._filterBy = value;
        this.viewProducts = this._filterBy ? this.filterProducts(this._filterBy) : this.products;
    }      
    
    filterProducts(filter:string):IProduct[] {
        filter = filter.toLowerCase();
        return this.products.filter(product =>{
            return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
        });
    }
}