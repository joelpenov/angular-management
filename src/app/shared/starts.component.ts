import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'ms-starts-rating',
    templateUrl: './starts.component.html',
    styleUrls:['./starts.component.css']
})
export class RatingStartsComponent implements OnChanges {
    
    @Input() startsRating:number=0;
    title:string;
    startsWidth:number=50;
    @Output() notifier:EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(changes: SimpleChanges): void {
        this.startsWidth=(this.startsRating * 100)/5;
        this.title = `Rating: ${this.startsRating}`;
    }
    onClickStarsHandle=()=> {
        this.notifier.emit(`The rating with ${this.startsRating } starts was clicked!`)
    }
}