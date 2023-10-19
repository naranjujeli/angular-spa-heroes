import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router) {
    
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  openHero(i: number) {
    this.router.navigate( ['/hero', i ]);
  }
}
