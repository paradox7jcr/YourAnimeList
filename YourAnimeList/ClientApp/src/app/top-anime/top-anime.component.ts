import { Component, Inject } from '@angular/core';
import { AnimeService } from '../services/AnimeService';

@Component({
  selector: 'top-anime',
  templateUrl: './top-anime.component.html'
})
export class TopAnimeComponent {
  public topAnime: TopAnime[];

  constructor(animeService: AnimeService) {
    animeService.getTopAnime().then((value) => this.topAnime = value);
    console.log(this.topAnime);
  }
}

interface JikanApiResponse {
  request_cache_expiry: number,
  request_cached: true,
  request_hash: string,
  top: TopAnime[];
}

interface TopAnime {
  end_date: string,
  episodes: number,
  image_url: string,
  mal_id: 0,
  members: 0,
  rank: 0,
  score: 0.0,
  start_date: string,
  title: string,
  type: string,
  url: string;
}


