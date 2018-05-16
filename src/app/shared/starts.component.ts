import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
    selector:'ms-starts-rating',
    templateUrl: './starts.component.html',
    styleUrls:['./starts.component.css']
})
export class RatingStartsComponent implements OnChanges {
    
    @Input() startsRating:number=0;
    title:string;
    startsWidth:number=50;
    ngOnChanges(changes: SimpleChanges): void {
        this.startsWidth=(this.startsRating * 100)/5;
        this.title = `Rating: ${this.startsRating}`;
    }
}