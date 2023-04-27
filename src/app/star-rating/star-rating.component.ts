import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
	imports: [NgbRatingModule, NgIf],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input()currentRate: number = 0;

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

}

