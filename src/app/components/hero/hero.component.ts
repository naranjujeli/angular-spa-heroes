import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  currentHero: any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService
    ) {
    this.activatedRoute.params.subscribe(params=> {
      this.currentHero = this._heroesService.getHero(params['id']);
    })
  }


}
