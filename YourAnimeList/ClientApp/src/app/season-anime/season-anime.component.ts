import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'season-anime',
  templateUrl: './season-anime.component.html',
  styleUrls: ['./season-anime.component.css']
})
export class SeasonAnimeComponent {
  public anime: SeasonAnime[]; 
  public year: number;
  public season: string;

  constructor(http: HttpClient) {
    this.year = 2019;
    this.season = "winter";
    http.get<JikanSeasonApiResponse>('https://api.jikan.moe/v3/season/'+ this.year + '/' + this.season)
      .subscribe(data => {
          console.log(data);
        this.anime = data.anime.sort((ani1, ani2) => ani2.score - ani1.score);
        }
    );
  }
}

interface JikanSeasonApiResponse {
  anime: SeasonAnime[],
  request_cache_expiry: number,
  request_cached: boolean,
  request_hash: string,
  season_name: string,
  season_year: number;
}

interface SeasonAnime {
  airing_start: string,
  continuing: boolean,
  episodes: number,
  image_url: string,
  members: number,
  score: number,
  source: string,
  synopsis: string,
  title: string,
  type: string,
  url: string;
}
