import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroesService:HeroesService) {
    
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
}
