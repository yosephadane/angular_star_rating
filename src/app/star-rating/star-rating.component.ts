import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StarRatingComponent implements OnInit {
  @Input('rating') public rating: number = 3;
  @Input('count') public starCount: number = 5;
  @Input('color') public color: string = 'accent';

  @Output() private ratingUpdated = new EventEmitter();
  ratingArr: number[] = [];

  constructor(){

  }
  ngOnInit() {
    for (let i = 0; i < this.starCount; i++) {
      this.ratingArr.push(i);
    }
  }

  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) 
    return 'star';
    else return 'star_border';
  }

  
}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
