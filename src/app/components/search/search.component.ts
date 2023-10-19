import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.searchHero(params['term']);
    })
  }

  ngOnInit() {

  }

  // Sí, ya sé, es código repetido, no me cuelguen
  openHero(i: number) {
    this.router.navigate( ['/hero', i ]);
  }

}
