import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Hero } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent {
  @Input() hero: any = {};
  @Input() index: number = 0;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter();
  }

  selectHero() {
    this.heroSelected.emit(this.index);
  }
}
