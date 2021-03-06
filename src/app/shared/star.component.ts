import {Component, OnChanges, EventEmitter, Input, Output} from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();
    starWidth: number;

    ngOnChanges():void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

}