import { IProduct } from 'src/app/product/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceUrl } from '../../api/products/url.service.model';
import { catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProductService{

    constructor(private _http: HttpClient) {
        
    }

    getAll (): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(ServiceUrl.GetAllProducts)
        .pipe(
            catchError(this.handleError('getAll', []))
          );
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          return of(result as T);
        };
      }
}